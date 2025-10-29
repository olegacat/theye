import { useState } from "react";
import styles from "./ModalResize.module.css";
import Icon from "@/icons/Icon";
import { CheckIcon } from "@/icons/svg/CheckIcon";

interface IModalResize {
  isModalResizeOpen: boolean;
}

const options = [
  {
    title: "Squares",
    items: [
      { name: "Large Rectangle", size: "336 x 450" },
      { name: "Small Square", size: "300 x 300" },
      { name: "Inline Rectangle", size: "336 x 280" },
    ],
  },
  {
    title: "Verticals",
    items: [
      { name: "Skyscraper", size: "1200 x 300" },
      { name: "Portrait", size: "300 x 250" },
      { name: "Small Portrait", size: "336 x 280" },
    ],
  },
];

export const ModalResize: React.FC<IModalResize> = ({ isModalResizeOpen }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const toggleSelect = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  // фильтруем элементы по поиску
  const filteredOptions = options.map((section) => {
    const filteredItems = section.items.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.size.toLowerCase().includes(search.toLowerCase())
    );
    return { ...section, items: filteredItems };
  }).filter(section => section.items.length > 0);  

  return (
    <div
      className={`${styles.modalresize_wrapper} ${
        isModalResizeOpen ? styles.open : ""
      }`}
    >
      <div className={styles.modalresize_top}>
        <Icon name="Search" />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.modalresize_options}>
        {filteredOptions.map((section) => (
          <div key={section.title} className={styles.section}>
            <div className={styles.sectionTitle}>{section.title}</div>
            {section.items.map((item) => {
              const isSelected = selected.includes(item.name);
              return (
                <div
                  key={item.name}
                  className={`${styles.option} ${
                    isSelected ? styles.selected : ""
                  }`}
                  onClick={() => toggleSelect(item.name)}
                >
                  <div className={styles.optionText}>
                    <span className={styles.optionName}>{item.name}</span>
                    <span className={styles.optionSize}>{item.size}</span>
                  </div>

                  <div className={styles.checkWrapper}>
                    {isSelected && <CheckIcon />}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
