import React from "react";
import styles from "./AppBar.module.css";
import Button from "../components/Button";
import Toggle from "../components/Toggle";

const AppBar = ({ onDownload }) => {
  return (
    <header className={styles.appBar}>
      {/* Logo svg*/}
      <svg
        width="164"
        height="75"
        viewBox="0 0 164 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.logo}
      >
        <path d="M14.7197 51.2939C14.7197 58.667 12.1725 62.3535 7.07812 62.3535C4.96224 62.3535 3.29395 61.792 2.07324 60.6689C0.852539 59.5459 0.242188 58.0648 0.242188 56.2256C0.242188 55.0374 0.510742 54.0934 1.04785 53.3936C1.58496 52.6937 2.22786 52.3438 2.97656 52.3438C4.47396 52.3438 5.22266 52.946 5.22266 54.1504C5.22266 54.6061 5.10059 55.0293 4.85645 55.4199C4.62858 55.8268 4.51465 56.2744 4.51465 56.7627C4.51465 57.2673 4.72624 57.7067 5.14941 58.0811C5.58887 58.4554 6.08529 58.6426 6.63867 58.6426C7.8431 58.6426 8.73828 58.1543 9.32422 57.1777C9.92643 56.2174 10.2275 54.4678 10.2275 51.9287V30.4199C10.2275 29.4434 9.96712 28.9551 9.44629 28.9551L6.63867 29.2969C5.98763 29.2969 5.45866 29.126 5.05176 28.7842C4.64486 28.4424 4.44141 27.9785 4.44141 27.3926C4.44141 26.7904 4.66927 26.2939 5.125 25.9033C5.59701 25.5127 6.4515 25.293 7.68848 25.2441C8.92546 25.179 9.82064 25.0895 10.374 24.9756C10.9274 24.8454 11.3506 24.7396 11.6436 24.6582C11.9365 24.5768 12.262 24.5361 12.6201 24.5361C14.0199 24.5361 14.7197 25.3174 14.7197 26.8799V51.2939ZM14.8174 16.4062C14.8174 17.9525 14.1582 18.9616 12.8398 19.4336C12.4655 19.5638 11.9365 19.6289 11.2529 19.6289C10.5693 19.6289 9.93457 19.3604 9.34863 18.8232C8.7627 18.2861 8.46973 17.5863 8.46973 16.7236C8.46973 15.861 8.77083 15.1449 9.37305 14.5752C9.97526 14.0055 10.7809 13.7207 11.79 13.7207C12.7992 13.7207 13.556 13.9974 14.0605 14.5508C14.5651 15.0879 14.8174 15.7064 14.8174 16.4062ZM39.0605 39.8438C36.4238 39.3392 34.0801 39.0869 32.0293 39.0869C29.9948 39.0869 28.4893 39.4938 27.5127 40.3076C26.5524 41.1051 26.0723 42.0166 26.0723 43.042C26.0723 44.0674 26.5199 44.9137 27.415 45.5811C28.3102 46.2321 29.5635 46.5576 31.1748 46.5576C34.4788 46.5576 37.1074 45.4915 39.0605 43.3594V39.8438ZM39.6221 47.1436C37.8317 49.292 34.8613 50.3662 30.7109 50.3662C27.944 50.3662 25.7386 49.7314 24.0947 48.4619C22.4671 47.1924 21.6533 45.4753 21.6533 43.3105C21.6533 39.7135 23.6471 37.3698 27.6348 36.2793C28.9857 35.9212 30.7272 35.7422 32.8594 35.7422C35.0078 35.7422 37.0749 35.9863 39.0605 36.4746V33.7891C39.0605 31.1035 37.9863 29.4596 35.8379 28.8574C35.0729 28.6296 34.0475 28.5156 32.7617 28.5156C30.0111 28.5156 28.4242 29.248 28.001 30.7129C27.7406 31.4941 27.2767 32.0557 26.6094 32.3975C26.3164 32.5439 25.9827 32.6172 25.6084 32.6172C24.0622 32.6172 23.2891 31.7871 23.2891 30.127C23.2891 28.7109 24.2168 27.4577 26.0723 26.3672C27.944 25.2767 30.3122 24.7314 33.1768 24.7314C38.027 24.7314 41.1602 26.4486 42.5762 29.8828C43.0482 31.0547 43.2842 32.4382 43.2842 34.0332V40.3564C43.2842 42.57 43.3737 44.0592 43.5527 44.8242C43.7318 45.5729 44.0654 46.1019 44.5537 46.4111C45.4163 46.9645 45.8477 47.6074 45.8477 48.3398C45.8477 49.6908 44.9932 50.3662 43.2842 50.3662C41.5915 50.3662 40.3708 49.292 39.6221 47.1436ZM61.4482 50L56.6875 49.8535L54.2217 49.9268C53.5869 49.9756 52.8626 50 52.0488 50C50.4863 50 49.7051 49.3978 49.7051 48.1934C49.7051 47.6074 49.9492 47.1517 50.4375 46.8262C50.9258 46.5007 51.6012 46.3379 52.4639 46.3379H54.6123V30.4199C54.6123 29.4434 54.417 28.9551 54.0264 28.9551C53.7822 28.9551 53.4648 29.012 53.0742 29.126C52.6999 29.2399 52.2441 29.2969 51.707 29.2969C51.1699 29.2969 50.6979 29.126 50.291 28.7842C49.9004 28.4424 49.7051 27.9785 49.7051 27.3926C49.7051 26.1393 50.5921 25.4313 52.3662 25.2686C53.4404 25.1709 54.3193 25.0244 55.0029 24.8291C55.6865 24.6338 56.248 24.5361 56.6875 24.5361C58.1686 24.5361 58.9092 25.3174 58.9092 26.8799V29.6387C59.7718 28.1738 60.96 26.9938 62.4736 26.0986C64.0036 25.1872 65.501 24.7314 66.9658 24.7314C71.3766 24.7314 74.1598 26.473 75.3154 29.9561C76.1292 28.4098 77.3255 27.1566 78.9043 26.1963C80.4831 25.2197 82.0618 24.7314 83.6406 24.7314C86.6354 24.7314 88.8571 25.5127 90.3057 27.0752C91.7705 28.6214 92.5029 30.7048 92.5029 33.3252V46.46L94.1387 46.4844C96.1895 46.4844 97.2148 47.1273 97.2148 48.4131C97.2148 48.8688 97.0195 49.2757 96.6289 49.6338C96.2383 49.9756 95.7256 50.1465 95.0908 50.1465C93.512 50.1465 92.4541 50.0977 91.917 50C91.3799 49.9023 90.8346 49.8535 90.2812 49.8535C89.7279 49.8535 89.2721 49.8617 88.9141 49.8779L87.8398 49.9268C87.2539 49.9756 86.5052 50 85.5938 50C84.015 50 83.2256 49.3978 83.2256 48.1934C83.2256 47.6074 83.4697 47.1517 83.958 46.8262C84.4626 46.5007 85.1299 46.3379 85.96 46.3379L88.2793 46.3867V34.9121C88.2793 30.7292 86.6598 28.6377 83.4209 28.6377C81.9398 28.6377 80.4261 29.3701 78.8799 30.835C77.3499 32.2998 76.3245 34.0983 75.8037 36.2305V46.3379H77.4395C79.4902 46.3379 80.5156 46.9808 80.5156 48.2666C80.5156 48.7223 80.3203 49.1292 79.9297 49.4873C79.5391 49.8291 79.0264 50 78.3916 50L73.7529 49.8535C73.0693 49.8535 72.5566 49.8617 72.2148 49.8779L71.1406 49.9268C70.3594 49.9756 69.6188 50 68.9189 50C68.2354 50 67.6657 49.8454 67.21 49.5361C66.7705 49.2269 66.5508 48.7793 66.5508 48.1934C66.5508 47.6074 66.8112 47.1517 67.332 46.8262C67.8529 46.5007 68.5446 46.3379 69.4072 46.3379H71.5801V34.9121C71.5801 30.7292 69.9362 28.6377 66.6484 28.6377C65.151 28.6377 63.613 29.3701 62.0342 30.835C60.4717 32.2998 59.43 34.0983 58.9092 36.2305V46.3379H60.4961C62.5469 46.3379 63.5723 46.9808 63.5723 48.2666C63.5723 48.7223 63.377 49.1292 62.9863 49.4873C62.5957 49.8291 62.083 50 61.4482 50ZM104.905 35.2539L106.59 35.3027C107.143 35.319 108.917 35.3271 111.912 35.3271C114.907 35.3271 116.868 35.083 117.796 34.5947C118.724 34.1064 119.188 33.3659 119.188 32.373C119.188 31.3802 118.626 30.5013 117.503 29.7363C116.38 28.9714 115.135 28.5889 113.768 28.5889C111.375 28.5889 109.406 29.1992 107.859 30.4199C106.313 31.6406 105.328 33.252 104.905 35.2539ZM121.287 42.3096C122.719 42.3096 123.436 42.9525 123.436 44.2383C123.436 44.8242 123.208 45.4834 122.752 46.2158C122.312 46.932 121.661 47.5993 120.799 48.2178C118.781 49.6501 116.136 50.3662 112.864 50.3662C109.609 50.3662 106.785 49.2676 104.393 47.0703C103.204 45.9798 102.252 44.637 101.536 43.042C100.82 41.4469 100.462 39.6973 100.462 37.793C100.462 34.082 101.683 30.9814 104.124 28.4912C106.565 25.9847 109.642 24.7314 113.353 24.7314C116.445 24.7314 118.895 25.4883 120.701 27.002C122.524 28.4993 123.436 30.3467 123.436 32.5439C123.436 34.7412 122.549 36.3851 120.774 37.4756C119 38.5498 115.631 39.0869 110.667 39.0869C109.349 39.0869 107.396 39.0381 104.808 38.9404C105.101 41.4632 106.077 43.3594 107.737 44.6289C109.397 45.8822 111.131 46.5088 112.938 46.5088C114.744 46.5088 116.168 46.3135 117.21 45.9229C118.268 45.516 119.025 44.8161 119.48 43.8232C119.952 42.8141 120.555 42.3096 121.287 42.3096ZM139.842 50.3662C138.426 50.3662 137.059 50.2523 135.74 50.0244C135.073 51.1963 134.373 51.7822 133.641 51.7822C132.599 51.7822 132.078 51.3021 132.078 50.3418C132.078 49.4954 131.858 48.7061 131.419 47.9736C130.996 47.2412 130.621 46.6309 130.296 46.1426C129.205 44.515 128.66 43.3757 128.66 42.7246C128.66 42.0736 128.847 41.5934 129.222 41.2842C129.596 40.9749 130.011 40.8203 130.467 40.8203C131.362 40.8203 132.168 41.5365 132.884 42.9688C133.616 44.3848 134.479 45.3288 135.472 45.8008C136.465 46.2728 138.027 46.5088 140.159 46.5088C143.3 46.5088 145.343 45.6136 146.287 43.8232C146.58 43.2861 146.727 42.7002 146.727 42.0654C146.727 40.7959 146.173 39.9007 145.066 39.3799C143.96 38.8428 142.243 38.501 139.915 38.3545C137.588 38.208 135.87 37.9557 134.764 37.5977C131.541 36.5072 129.93 34.5703 129.93 31.7871C129.93 30.0781 130.825 28.54 132.615 27.1729C134.422 25.7894 137.059 25.0977 140.525 25.0977C141.258 25.0977 141.99 25.1628 142.723 25.293C142.56 24.8372 142.479 24.4548 142.479 24.1455C142.479 23.8363 142.617 23.5514 142.894 23.291C143.17 23.0143 143.512 22.876 143.919 22.876C144.342 22.876 144.668 22.9818 144.896 23.1934C145.123 23.4049 145.384 23.8037 145.677 24.3896C145.97 24.9593 146.531 25.7812 147.361 26.8555C148.191 27.9134 148.704 28.6458 148.899 29.0527C149.111 29.4434 149.217 29.8665 149.217 30.3223C149.217 30.778 149.07 31.1605 148.777 31.4697C148.501 31.779 148.126 31.9336 147.654 31.9336C146.759 31.9336 145.953 31.3395 145.237 30.1514C144.879 29.5492 144.358 29.1341 143.675 28.9062C142.991 28.6784 141.803 28.5645 140.11 28.5645C138.418 28.5645 137.059 28.8737 136.033 29.4922C135.024 30.0944 134.52 30.8105 134.52 31.6406C134.52 32.4707 134.78 33.0485 135.301 33.374C136.261 33.9925 137.758 34.3587 139.793 34.4727C143.699 34.7005 146.531 35.3678 148.289 36.4746C150.063 37.5814 150.95 39.2334 150.95 41.4307C150.95 44.2464 149.876 46.4437 147.728 48.0225C145.579 49.585 142.951 50.3662 139.842 50.3662Z" />
      </svg>
      <div className={styles.alignRight}>
        <div className={styles.buttonGroup}>
          <Button text="Ask George" variant="primary" />
          <Button text="Upload File" variant="secondary" />
          <Button text="Download" variant="secondary" onClick={onDownload} />
        </div>
        <Toggle />
      </div>
    </header>
  );
};

export default AppBar;
