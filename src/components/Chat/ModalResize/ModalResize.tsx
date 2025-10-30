import { useState } from "react";
import styles from "./ModalResize.module.css";
import Icon from "@/icons/Icon";
import { CheckIcon } from "@/icons/svg/CheckIcon";
import image from "./optionResizeImages/LargeRectangle300x250px.svg";

type OptionItem = {
  name: string;
  size: string;
  image: string;
};

type GroupOptions = {
  title: string;
  items: OptionItem[];
};

interface IModalResize {
  isModalResizeOpen: boolean;
  setSelectedSizes: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSizes: string[];
  chooseResizeOptions: () => void;
  options: GroupOptions[];
}


export const ModalResize: React.FC<IModalResize> = ({
  isModalResizeOpen,
  setSelectedSizes,
  selectedSizes,
  chooseResizeOptions,
  options
}) => {
  const [search, setSearch] = useState("");

  const toggleSelect = (name: string) => {
    setSelectedSizes((prev: string[]) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  // фильтруем элементы по поиску
  const filteredOptions = options
    .map((section) => {
      const filteredItems = section.items.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.size.toLowerCase().includes(search.toLowerCase())
      );
      return { ...section, items: filteredItems };
    })
    .filter((section) => section.items.length > 0);

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
              const isSelected = selectedSizes.includes(item.name);
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
                  </div>
                  <div className={styles.checkSize}>
                    <span className={styles.optionSize}>{item.size}</span>
                    <div
                      className={`${styles.checkWrapper} ${
                        isSelected ? null : styles.notChosen
                      }`}
                    >
                      {isSelected && <CheckIcon />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
        <button
          className={`${styles.modalresize_add_btn} ${
            selectedSizes.length > 0 ? styles.active : null
          }`}
          onClick={chooseResizeOptions}
        >
          <Icon name="PlusIcon" cursor={"pointer"} />
          Add
        </button>
      </div>
    </div>
  );
};
