import { usePreferredLanguage } from "@uidotdev/usehooks";

const SelectLanguage = () => {
  const lang = usePreferredLanguage();
  return (
    <div>
      Languages: <span className="uppercase">{lang}</span>
    </div>
  );
};

export default SelectLanguage;
