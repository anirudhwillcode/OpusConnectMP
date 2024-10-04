import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "company", "student"],
      },
      {
        icon: "/teacher.png",
        label: "Jobs",
        href: "/list/",
        visible: ["admin", "student"],
      },
      {
        icon: "/student.png",
        label: "CareerGuide",
        href: "/list/students",
        visible: ["admin", "student"],
      },
      {
        icon: "/parent.png",
        label: "Post Jobs",
        href: "/list/parents",
        visible: ["admin", "company"],
      },
      {
        icon: "/subject.png",
        label: "View Applications",
        href: "/list/subjects",
        visible: ["admin", "company"],
      },
      {
        icon: "/class.png",
        label: "Shortlist",
        href: "/list/classes",
        visible: ["admin", "company"],
      },
      {
        icon: "/lesson.png",
        label: "User Management",
        href: "/list/lessons",
        visible: ["admin"],
      },
      {
        icon: "/calendar.png",
        label: "Manage Companies",
        href: "/list/events",
        visible: ["admin"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "student", "company"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "student", "company"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "student", "company"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "student", "company"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="w-64 mt-4 text-sm bg-primarycolr rounded-lg  p-4">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="text-lg text-secondarycolr font-bold mb-2">{i.title}</span>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-start gap-4 text-secondarycolr py-2 hover:bg-gray-100 rounded-lg"
            >
              <Image src={item.icon} alt="" width={20} height={20} />
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;