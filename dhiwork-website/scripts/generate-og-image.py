#!/usr/bin/env python3
"""Generate Open Graph image from public/logo.png.

Apple touch icon: resizes public/apple-touch-icon.png (square artwork with logo)
to 180×180 — that file is the source of truth, not logo.png.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
LOGO_PATH = PUBLIC / "logo.png"
APPLE_TOUCH_PATH = PUBLIC / "apple-touch-icon.png"
OUT_DIR = PUBLIC / "images"

BRAND_NAVY = (53, 59, 63)  # #353b3f
BRAND_ORANGE = (217, 89, 10)  # #d9590a
TAGLINE = "Enterprise Consulting for SAP, Oracle, Data & AI"

APPLE_TOUCH_SIZE = 180


def load_logo() -> Image.Image:
    logo = Image.open(LOGO_PATH).convert("RGBA")
    return logo


def generate_og_image() -> None:
    width, height = 1200, 630
    canvas = Image.new("RGB", (width, height), BRAND_NAVY)
    draw = ImageDraw.Draw(canvas)

    logo = load_logo()
    max_logo_w = 880
    scale = min(max_logo_w / logo.width, 1.0)
    logo_w = int(logo.width * scale)
    logo_h = int(logo.height * scale)
    logo = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)

    x = (width - logo_w) // 2
    y = 168
    canvas.paste(logo, (x, y), logo)

    try:
        font = ImageFont.truetype("arial.ttf", 28)
    except OSError:
        font = ImageFont.load_default()

    bbox = draw.textbbox((0, 0), TAGLINE, font=font)
    text_w = bbox[2] - bbox[0]
    text_x = (width - text_w) // 2
    draw.text((text_x, y + logo_h + 36), TAGLINE, fill=(255, 255, 255), font=font)

    accent_y = height - 8
    draw.rectangle([(0, accent_y), (width, height)], fill=BRAND_ORANGE)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out = OUT_DIR / "og-image.png"
    canvas.save(out, "PNG", optimize=True)
    print(f"Wrote {out.relative_to(ROOT)} ({width}x{height})")


def generate_apple_touch_icon() -> None:
    """Use existing square apple-touch-icon.png as art; output 180×180 for iOS."""
    if not APPLE_TOUCH_PATH.is_file():
        raise SystemExit(
            f"Missing {APPLE_TOUCH_PATH.relative_to(ROOT)} — "
            "add your square logo asset there first, then re-run this script."
        )

    with Image.open(APPLE_TOUCH_PATH) as src:
        src.load()
        img = src.convert("RGBA")

    w, h = img.size
    if w != h:
        side = min(w, h)
        left = (w - side) // 2
        top = (h - side) // 2
        img = img.crop((left, top, left + side, top + side))

    img = img.resize((APPLE_TOUCH_SIZE, APPLE_TOUCH_SIZE), Image.Resampling.LANCZOS)

    # Opaque RGB for broad iOS / PWA compatibility (flatten transparency on white)
    flat = Image.new("RGB", img.size, (255, 255, 255))
    flat.paste(img, mask=img.split()[3] if img.mode == "RGBA" else None)

    tmp = APPLE_TOUCH_PATH.with_name(f"{APPLE_TOUCH_PATH.stem}.tmp{APPLE_TOUCH_PATH.suffix}")
    try:
        flat.save(tmp, "PNG", optimize=True)
        tmp.replace(APPLE_TOUCH_PATH)
    except OSError:
        if tmp.is_file():
            tmp.unlink()
        raise

    print(
        f"Wrote {APPLE_TOUCH_PATH.relative_to(ROOT)} "
        f"({APPLE_TOUCH_SIZE}x{APPLE_TOUCH_SIZE}, from square source {w}x{h})"
    )


if __name__ == "__main__":
    if not LOGO_PATH.is_file():
        raise SystemExit(f"Missing logo: {LOGO_PATH}")
    generate_og_image()
    generate_apple_touch_icon()
