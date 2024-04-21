import React from 'react';
import styles from './Drawer.module.css';

enum DrawerDirection {
  Left = 'Left',
  Right = 'Right',
}

export type DrawerProps = {
  isOpen: boolean;
  children: React.ReactNode;
  direction?: DrawerDirection;
  onClose: () => void;
};

const Drawer = ({ isOpen, children, direction = DrawerDirection.Right, onClose }: DrawerProps) => {
  const classNames = `${styles['Drawer']} ${styles[direction]} ${isOpen ? styles['Open'] : ''}`;

  return (
    <div className={classNames}>
      <div
        className={styles['Close']}
        onClick={onClose}
      >
        x
      </div>
      <div className={styles['Content']}>{children}</div>
    </div>
  );
};

export { DrawerDirection };
export default Drawer;
