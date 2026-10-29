import { personalInfoData } from "../../data/personalInfo";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <hr className="border-neutral-900" />
      <div className="text-center p-5 bg-[#0a0710] text-sm text-neutral-500 font-medium">
        © {currentYear} {personalInfoData.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

