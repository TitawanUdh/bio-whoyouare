import { FaHeart } from "react-icons/fa";
import { SiGoogleearth } from "react-icons/si";

const links = [
  {
    num: 1,
    title: "รู้จักตัวเอง",
    link: "https://whoyouare-01.vercel.app/",
    icon: <SiGoogleearth />,
  },
  {
    num: 2,
    title: "ด้านมืดในใจ",
    link: "https://whoyouare-02.vercel.app/",
    icon: <SiGoogleearth />,
  },
  {
    num: 3,
    title: "สีของจิตใจคุณ",
    link: "https://whoyouare-03.vercel.app/",
    icon: <SiGoogleearth />,
  },
  {
    num: 4,
    title: "ดอกไม้ในใจ",
    link: "https://whoyouare-04.vercel.app/",
    icon: <SiGoogleearth/>,
  },
  {
    num: 5,
    title: "ติดต่อเราสร้างเกมของตัวเอง",
    link: '/detail-contact',
    icon: <FaHeart/>,
  },
];

export default function Directions() {
const open = (href) => {
    if (!href) return;

    // เช็คว่าถ้า link ขึ้นต้นด้วย / ให้เปิดในหน้าเดิม
    if (href.startsWith('/')) {
      window.location.href = href; 
    } else {
      // ถ้าเป็น external link ให้เปิด tab ใหม่
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <div className="link-list mt-4">
      
      {links.map((it) => {
        const disabled = !it.link;
        return (
          <div
            key={it.num}
            className={`link-card ${disabled ? "is-disabled" : ""}`}
            role="button"
            tabIndex={0}
            aria-disabled={disabled}
            onClick={() => !disabled && open(it.link)}
            onKeyDown={(e) => {
              if (!disabled && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                open(it.link);
              }
            }}
          >
            <span className="chip">{it.icon}</span>
            <div className="link-title">{it.title}</div>
          
          </div>
        );
      })}
    </div>
  );
}
