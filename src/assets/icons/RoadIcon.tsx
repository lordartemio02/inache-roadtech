import { FC } from "react";
import { IconProps } from "../../interfaces/Icon.interfaces";

const RoadIcon: FC<IconProps> = ({ className, onClick }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      onClick={onClick}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="black">
      <path d="M13.7823 10.8125L13.3203 10.1594L13.7823 10.8125ZM9.71772 13.6875L9.25575 13.0343L9.71772 13.6875ZM5.82984 17.1078L5.04537 16.9509V16.9509L5.82984 17.1078ZM11 20.3H11.8V18.7H11V20.3ZM6.41636 18.9527L5.86651 19.5338H5.86651L6.41636 18.9527ZM13.5 3.7H12.7V5.3H13.5V3.7ZM17.0836 5.04729L16.5338 5.62837V5.62837L17.0836 5.04729ZM17.6702 6.89221L16.8857 6.73533L16.8857 6.73533L17.6702 6.89221ZM6.09095 2.94857L5.49664 3.48411L6.09095 4.14363L6.68525 3.48411L6.09095 2.94857ZM2.51753 5.65202L1.89852 6.15879L2.51753 5.65202ZM9.66436 5.65202L9.04535 5.14524V5.14524L9.66436 5.65202ZM9.29981 2.44598L9.79533 1.81792V1.81792L9.29981 2.44598ZM6.09409 8.8676L5.57931 9.47997C5.87691 9.73014 6.31128 9.73014 6.60888 9.47997L6.09409 8.8676ZM18.0909 15.9486L17.4966 16.4841L18.0909 17.1436L18.6853 16.4841L18.0909 15.9486ZM14.5175 18.652L13.8985 19.1588L14.5175 18.652ZM21.6644 18.652L21.0453 18.1452V18.1452L21.6644 18.652ZM21.2998 15.446L21.7953 14.8179L21.2998 15.446ZM18.0941 21.8676L17.5793 22.48C17.8769 22.7301 18.3113 22.7301 18.6089 22.48L18.0941 21.8676ZM13.3203 10.1594L9.25575 13.0343L10.1797 14.3406L14.2443 11.4657L13.3203 10.1594ZM9.25575 13.0343C8.02414 13.9055 7.05836 14.5878 6.38559 15.1515C6.04723 15.435 5.75503 15.7113 5.5309 15.9889C5.30728 16.2658 5.11876 16.5839 5.04537 16.9509L6.6143 17.2647C6.61899 17.2412 6.64451 17.1566 6.77579 16.994C6.90656 16.832 7.11011 16.6319 7.41322 16.3779C8.02339 15.8666 8.92349 15.2291 10.1797 14.3406L9.25575 13.0343ZM11 18.7C9.45559 18.7 8.50424 18.699 7.86098 18.6355C7.23099 18.5732 7.06271 18.4629 6.96622 18.3716L5.86651 19.5338C6.34839 19.9898 6.94831 20.1531 7.70373 20.2277C8.44589 20.301 9.49718 20.3 11 20.3V18.7ZM5.04537 16.9509C4.8564 17.8958 5.16658 18.8715 5.86651 19.5338L6.96622 18.3716C6.66625 18.0878 6.53332 17.6696 6.6143 17.2647L5.04537 16.9509ZM13.5 5.3C14.7799 5.3 15.4621 5.30189 15.9063 5.36134C16.112 5.38887 16.2244 5.4244 16.2977 5.45802C16.3659 5.48934 16.4347 5.53459 16.5338 5.62837L17.6335 4.4662C17.4434 4.28635 17.2321 4.12636 16.9648 4.00375C16.7026 3.88345 16.424 3.81637 16.1186 3.77548C15.5405 3.69811 14.7201 3.7 13.5 3.7V5.3ZM14.2443 11.4657C15.5134 10.5679 16.4884 9.75122 17.1753 9.04178C17.8293 8.36637 18.3278 7.68309 18.4546 7.04909L16.8857 6.73533C16.8563 6.88213 16.6549 7.27917 16.0259 7.92881C15.4298 8.54441 14.5389 9.29744 13.3203 10.1594L14.2443 11.4657ZM16.5338 5.62837C16.8337 5.91222 16.9667 6.33037 16.8857 6.73533L18.4546 7.0491C18.6436 6.10419 18.3334 5.12851 17.6335 4.4662L16.5338 5.62837ZM6.68525 2.41303C5.70972 1.33045 3.86467 0.619017 2.37815 1.82465L3.38601 3.06732C3.9505 2.60949 4.8352 2.75009 5.49664 3.48411L6.68525 2.41303ZM2.37815 1.82465C1.01852 2.92737 0.804183 4.8221 1.89852 6.15879L3.13654 5.14524C2.62021 4.51455 2.69462 3.62806 3.38601 3.06732L2.37815 1.82465ZM10.2834 6.15879C11.3701 4.83136 11.1923 2.92006 9.79533 1.81792L8.8043 3.07405C9.49359 3.61787 9.56926 4.50529 9.04535 5.14524L10.2834 6.15879ZM9.79533 1.81792C8.29819 0.63675 6.47866 1.32325 5.49664 2.41303L6.68525 3.48411C7.3402 2.75729 8.21517 2.60925 8.8043 3.07405L9.79533 1.81792ZM1.89852 6.15879C2.28441 6.63015 3.06771 7.33958 3.78323 7.96111C4.51715 8.59863 5.25487 9.20723 5.57931 9.47997L6.60888 8.25523C6.26918 7.96967 5.55341 7.37942 4.83248 6.75319C4.09315 6.11097 3.42023 5.49175 3.13654 5.14524L1.89852 6.15879ZM6.60888 9.47997C6.93441 9.20632 7.66967 8.59846 8.40246 7.96054C9.11663 7.33884 9.89784 6.62971 10.2834 6.15879L9.04535 5.14524C8.7613 5.49219 8.08944 6.11171 7.35191 6.75375C6.633 7.37959 5.91792 7.97058 5.57931 8.25523L6.60888 9.47997ZM18.6853 15.413C17.7097 14.3305 15.8647 13.619 14.3781 14.8246L15.386 16.0673C15.9505 15.6095 16.8352 15.7501 17.4966 16.4841L18.6853 15.413ZM14.3781 14.8246C13.0185 15.9274 12.8042 17.8221 13.8985 19.1588L15.1365 18.1452C14.6202 17.5146 14.6946 16.6281 15.386 16.0673L14.3781 14.8246ZM22.2834 19.1588C23.3701 17.8314 23.1923 15.9201 21.7953 14.8179L20.8043 16.074C21.4936 16.6179 21.5693 17.5053 21.0453 18.1452L22.2834 19.1588ZM21.7953 14.8179C20.2982 13.6367 18.4787 14.3232 17.4966 15.413L18.6853 16.4841C19.3402 15.7573 20.2152 15.6093 20.8043 16.074L21.7953 14.8179ZM13.8985 19.1588C14.2844 19.6302 15.0677 20.3396 15.7832 20.9611C16.5171 21.5986 17.2549 22.2072 17.5793 22.48L18.6089 21.2552C18.2692 20.9697 17.5534 20.3794 16.8325 19.7532C16.0931 19.111 15.4202 18.4918 15.1365 18.1452L13.8985 19.1588ZM18.6089 22.48C18.9344 22.2063 19.6697 21.5985 20.4025 20.9605C21.1166 20.3388 21.8978 19.6297 22.2834 19.1588L21.0453 18.1452C20.7613 18.4922 20.0894 19.1117 19.3519 19.7537C18.633 20.3796 17.9179 20.9706 17.5793 21.2552L18.6089 22.48Z" />
    </svg>
  );
};

export default RoadIcon;
