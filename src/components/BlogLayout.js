import React from 'react'
import styles from './BlogLayout.module.css'
import { Outlet } from "react-router-dom";

const BlogLayout = () => {
  return (
    <div className={styles.body}>
      <div className={styles.sidebar}>Sidebar</div>
      <div className={styles.main}>
        Main Content
        <Outlet />
      </div>
      <div className={styles.adContent}>Advertisement</div>
    </div>
  );
}

export default BlogLayout