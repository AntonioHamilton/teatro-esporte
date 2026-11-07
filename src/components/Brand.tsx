import logo from "@/assets/teatro-esporte-logo.png";

interface BrandProps {
  esporteClassName?: string;
}

const Brand = ({ esporteClassName = "text-ember" }: BrandProps) => (
  <span className="inline-flex items-center gap-2.5">
    <img src={logo} alt="" className="h-11 w-11" />
    <span className="whitespace-nowrap text-[22px] font-extrabold leading-[26px] leading-[26px] tracking-[-0.02em] text-ink">
      TEATRO<span className={esporteClassName}>ESPORTE</span>
    </span>
  </span>
);

export default Brand;
