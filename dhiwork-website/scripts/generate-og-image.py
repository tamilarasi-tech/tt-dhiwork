#!/usr/bin/env python3
"""Generate Open Graph and apple-touch icons from public/logo.png."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
LOGO_PATH = PUBLIC / "logo.png"
OUT_DIR = PUBLIC / "images"

BRAND_NAVY = (13, 27, 42)  # #0d1b2a
BRAND_ORANGE = (217, 89, 10)  # #d9590a
TAGLINE = "Enterprise Consulting for SAP, Oracle, Data & AI"


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
    size = 180
    logo = load_logo()
    canvas = Image.new("RGB", (size, size), BRAND_NAVY)

    padding = 20
    max_w = size - padding * 2
    max_h = size - padding * 2
    scale = min(max_w / logo.width, max_h / logo.height)
    logo_w = int(logo.width * scale)
    logo_h = int(logo.height * scale)
    logo = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)

    x = (size - logo_w) // 2
    y = (size - logo_h) // 2
    canvas.paste(logo, (x, y), logo)

    out = PUBLIC / "apple-touch-icon.png"
    canvas.save(out, "PNG", optimize=True)
    print(f"Wrote {out.relative_to(ROOT)} ({size}x{size})")


if __name__ == "__main__":
    if not LOGO_PATH.is_file():
        raise SystemExit(f"Missing logo: {LOGO_PATH}")
    generate_og_image()
    generate_apple_touch_icon()
