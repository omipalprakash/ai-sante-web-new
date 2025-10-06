import Link from 'next/link';
import styles from './button.module.css';
import Image from 'next/image';
import { icons } from '@/utility/image';

const Button = ({ url, title = 'Book A Demo', className }) => {
  return (
    <div>
      <div className={styles.demoBackgrounfBtn}>
        <div></div>
        <Link href={url} className={`${styles.demoBtn} group`}>
          {title}
          <span className="hidden transition-all duration-300 group-hover:inline ">
            <Image src={icons.shareImg} alt="share_image" width={10} height={10} />
          </span>
        </Link>
      </div>
    </div>

  );
};

export default Button;
