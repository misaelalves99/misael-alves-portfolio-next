// app/components/about/CertificationFilter.tsx

"use client";

import React from "react";
import styles from "./CertificationFilter.module.css";

interface CertificationFilterProps {
  categories: string[];
  selectedCategory: string;
  onChangeCategory: (category: string) => void;
}

export default function CertificationFilter({
  categories,
  selectedCategory,
  onChangeCategory,
}: CertificationFilterProps) {
  return (
    <div className={styles.filterContainer}>
      <label htmlFor="categoryFilter">Filtrar por categoria: </label>
      <select
        id="categoryFilter"
        value={selectedCategory}
        onChange={(e) => onChangeCategory(e.target.value)}
        className={styles.selectFilter}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
