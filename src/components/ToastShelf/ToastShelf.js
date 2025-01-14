import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, onDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.variant} message={toast.message} onDismiss={() => onDismiss(toast.id)} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
