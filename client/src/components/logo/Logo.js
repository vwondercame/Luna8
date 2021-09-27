import React from "react";
import "./Logo.scss";

function Logo() {
  const logo = document.querySelectorAll("#logo path");
  for (let i = 0; i < logo.length; i++) {
    // console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
  }

  return (
    <div>
      <svg className="logo" id="logo" width="300" height="92" viewBox="0 0 300 92" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M77.2428 36.0546C85.8853 21.0157 97.961 2.18743 110.629 2.18743C114.536 2.18743 115.601 4.55576 115.601 7.51617C115.601 14.5028 106.367 25.3971 95.3564 30.6074C89.5553 33.331 83.2807 35.3441 77.2428 36.0546ZM32.7284 81.2898C26.9273 84.4871 20.8894 86.5002 13.7861 86.5002C8.45854 86.5002 3.01262 85.316 3.01262 81.1714C3.01262 78.5662 6.20914 76.0795 12.8389 76.0795C18.7584 76.0795 24.9147 77.6189 32.7284 81.2898ZM40.0685 74.8953C34.5042 72.527 27.2825 70.0402 17.9297 70.2771C6.32753 70.5139 1 76.4347 1 80.9346C1 86.1449 7.03786 87.8027 13.5493 87.8027C20.0607 87.8027 26.0986 86.3817 34.0307 82.0003C45.7512 87.6843 54.0385 91 63.9832 91C73.8095 91 89.9105 85.0792 89.9105 73.8296C89.9105 71.9349 89.2002 70.1586 88.3714 69.2113C88.0163 83.0661 78.7819 87.3291 73.6911 87.3291C61.7338 87.3291 50.9604 79.5136 41.8444 75.7242C53.3281 68.7376 64.22 58.0801 76.6509 37.3572C83.3991 36.6467 89.7921 34.752 95.9484 32.1469C108.734 26.5813 120.455 16.5159 120.455 8.22668C120.455 3.72684 116.785 1.12168 111.221 1.00326C93.9357 0.766424 76.6509 13.437 62.6809 36.6467C52.0259 35.9362 44.8041 31.0811 45.2777 22.3183C45.7512 12.7265 55.5775 5.85834 68.3636 6.80568C66.9429 6.21359 64.6935 5.97676 63.2729 5.97676C50.1316 5.73993 37.9375 11.8976 37.9375 22.5551C37.9375 32.0285 50.0132 37.3572 61.9706 37.9493C54.0385 51.5672 46.2248 69.685 40.0685 74.8953Z" stroke="white" strokeWidth="2" mask="url(#path-1-outside-1)"/>
<path d="M127.524 84.3687C133.562 84.3687 138.061 80.9346 142.441 75.9611C145.874 72.0533 148.597 67.4351 149.663 63.5273C147.295 67.7903 145.164 70.9876 141.612 75.1322C137.706 79.632 134.154 81.8819 131.905 81.8819C130.01 81.8819 129.182 80.5793 129.182 79.1583C129.182 75.6058 133.68 68.8561 138.534 61.159C142.796 54.5276 145.401 49.3173 145.401 45.2911C145.401 41.7386 143.27 39.6071 139.008 39.6071C135.93 39.6071 132.615 41.7386 130.602 44.699C131.668 43.6333 132.615 43.3965 133.444 43.3965C134.272 43.3965 134.864 43.8701 134.864 44.699C134.864 46.12 134.036 48.1331 132.733 50.383C129.418 56.1855 125.393 61.9879 122.67 65.7772C116.277 74.8953 107.871 81.5267 104.438 81.5267C103.254 81.5267 102.426 80.9346 102.426 79.5136C102.426 77.1452 105.859 71.5796 110.476 64.8299C116.632 55.9486 120.066 49.9094 120.066 45.0543C120.066 41.6202 117.698 39.3703 113.436 39.3703C106.924 39.3703 100.65 45.0543 98.8739 50.9751C102.07 46.0016 105.385 43.3965 107.635 43.3965C108.7 43.3965 109.174 43.9885 109.174 44.9359C109.174 47.541 105.267 53.5803 99.4658 62.2247C94.7302 69.2113 92.836 73.4743 92.836 77.2637C92.836 81.6451 96.1509 84.1318 100.295 84.1318C108.345 84.1318 115.922 76.6716 121.841 68.7376C122.197 68.3824 122.315 68.6192 122.078 68.9745C120.658 71.2244 119.474 74.5401 119.474 77.0268C119.474 81.2898 122.078 84.3687 127.524 84.3687Z" stroke="white" strokeWidth="2" mask="url(#path-1-outside-1)"/>
<path d="M178.045 58.4354C172.362 66.3693 169.521 71.6981 169.521 76.5532C169.521 81.1714 172.362 84.3687 177.808 84.3687C183.609 84.3687 188.345 80.6977 192.488 75.9611C195.922 71.9349 198.645 67.4351 199.71 63.5273C197.342 67.7903 195.211 70.9876 191.66 75.1322C187.753 79.632 184.083 81.8819 181.833 81.8819C180.058 81.8819 179.11 80.6977 179.11 79.2767C179.11 76.0795 182.07 71.2244 187.635 63.1721C192.962 55.5934 195.685 50.9751 195.685 46.5937C195.685 42.2123 192.252 39.6071 187.635 39.6071C179.821 39.6071 172.362 47.7779 166.68 55.2381C166.324 55.5934 165.969 55.3566 166.324 54.8829C168.337 52.1593 170.35 48.1331 170.35 45.0543C170.35 41.857 168.219 39.3703 163.72 39.3703C156.735 39.3703 150.815 45.4095 149.04 50.7383C152.118 46.4753 155.196 43.3965 157.8 43.3965C158.747 43.3965 159.458 43.9885 159.458 45.1727C159.458 47.7779 155.314 54.054 150.223 62.1063C146.317 68.264 144.659 73.2375 144.659 76.79C144.659 81.2898 147.619 83.895 151.644 84.2502C150.815 83.1845 152.591 79.1583 155.196 74.4216C157.919 69.4481 161.826 63.0536 166.798 56.7776C174.138 47.4226 180.294 42.4491 183.964 42.4491C185.385 42.4491 185.977 43.3965 185.977 44.4622C185.977 47.3042 182.544 52.1593 178.045 58.4354Z" stroke="white" strokeWidth="2" mask="url(#path-1-outside-1)"/>
<path d="M228.695 84.3687C234.378 84.3687 238.995 80.8162 243.02 76.0795C246.099 72.4086 249.058 67.9087 250.361 63.5273C247.874 68.0271 245.625 71.3428 242.073 75.369C238.403 79.632 234.852 81.8819 232.365 81.8819C230.59 81.8819 229.761 80.6977 229.761 79.2767C229.761 77.3821 230.708 74.7769 232.721 71.2244C236.627 64.001 245.27 50.2646 252.018 40.5545C250.834 40.0808 248.94 44.8175 244.204 44.8175C240.771 44.8175 237.93 44.699 236.627 44.107C236.864 40.0808 233.904 38.8966 230.708 38.8966C221.947 38.8966 212.594 43.7517 204.07 53.5803C197.914 60.4485 194.954 68.5008 194.954 74.5401C194.954 80.9346 198.269 84.1318 203.834 84.1318C208.451 84.1318 212.002 81.4082 215.317 77.8557C217.33 75.7242 219.934 72.1717 221.237 70.2771C221.592 69.8034 221.829 70.1586 221.592 70.5139C221.118 71.4612 219.934 73.948 219.934 76.6716C219.934 81.2898 222.657 84.3687 228.695 84.3687ZM235.444 45.6464L229.642 55.2381C225.736 61.5142 219.934 70.8691 215.081 76.3163C211.884 79.8688 208.924 81.8819 206.675 81.8819C205.136 81.8819 204.307 80.9346 204.307 79.2767C204.307 73.948 210.345 64.3562 213.423 59.3827C217.212 53.5803 226.801 40.5545 232.721 40.5545C234.733 40.5545 236.035 42.3307 235.444 45.6464Z" stroke="white" strokeWidth="2" mask="url(#path-1-outside-1)"/>
<path d="M245.475 72.6454C245.475 80.6977 252.579 84.2502 261.221 84.2502C271.521 84.2502 285.846 77.6189 286.083 64.8299C286.32 58.7906 282.768 53.6987 278.979 50.5015C289.99 46.8305 298.75 41.9755 298.987 33.9231C299.342 26.4629 292.239 22.9104 284.78 22.9104C274.481 22.9104 260.866 27.2918 260.866 40.7913C260.866 46.0016 264.062 50.2646 266.43 52.7514C253.407 56.5407 245.475 64.3562 245.475 72.6454ZM276.375 68.3824C276.375 76.0795 270.455 83.0661 261.458 82.9477C255.183 82.9477 252.342 78.0926 252.342 72.8822C252.342 64.8299 256.959 57.4881 267.259 53.6987C270.219 56.5407 276.375 61.8695 276.375 68.3824ZM270.574 37.2388C270.574 27.8839 277.559 24.0945 284.662 24.0945C289.871 24.2129 293.068 27.8839 293.068 32.3837C293.068 39.6071 287.267 46.0016 277.914 49.5541C274.244 46.3569 270.574 42.0939 270.574 37.2388Z" stroke="white" strokeWidth="2" mask="url(#path-1-outside-1)"/>
</svg>

      
      <svg
        className="logo__tablet"
        width="736"
        height="230"
        viewBox="0 0 736 230"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M191.304 90.376C212.328 53.8 241.704 8.008 272.52 8.008C282.024 8.008 284.616 13.768 284.616 20.968C284.616 37.96 262.152 64.456 235.368 77.128C221.256 83.752 205.992 88.648 191.304 90.376ZM83.016 200.392C68.904 208.168 54.216 213.064 36.936 213.064C23.976 213.064 10.728 210.184 10.728 200.104C10.728 193.768 18.504 187.72 34.632 187.72C49.032 187.72 64.008 191.464 83.016 200.392ZM100.872 184.84C87.336 179.08 69.768 173.032 47.016 173.608C18.792 174.184 5.832 188.584 5.832 199.528C5.832 212.2 20.52 216.232 36.36 216.232C52.2 216.232 66.888 212.776 86.184 202.12C114.696 215.944 134.856 224.008 159.048 224.008C182.952 224.008 222.12 209.608 222.12 182.248C222.12 177.64 220.392 173.32 218.376 171.016C217.512 204.712 195.048 215.08 182.664 215.08C153.576 215.08 127.368 196.072 105.192 186.856C133.128 169.864 159.624 143.944 189.864 93.544C206.28 91.816 221.832 87.208 236.808 80.872C267.912 67.336 296.424 42.856 296.424 22.696C296.424 11.752 287.496 5.416 273.96 5.128C231.912 4.55199 189.864 35.368 155.88 91.816C129.96 90.088 112.392 78.28 113.544 56.968C114.696 33.64 138.6 16.936 169.704 19.24C166.248 17.8 160.776 17.224 157.32 17.224C125.352 16.648 95.688 31.624 95.688 57.544C95.688 80.584 125.064 93.544 154.152 94.984C134.856 128.104 115.848 172.168 100.872 184.84Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M313.621 207.88C328.309 207.88 339.253 199.528 349.909 187.432C358.261 177.928 364.885 166.696 367.477 157.192C361.717 167.56 356.533 175.336 347.893 185.416C338.389 196.36 329.749 201.832 324.277 201.832C319.669 201.832 317.653 198.664 317.653 195.208C317.653 186.568 328.597 170.152 340.405 151.432C350.773 135.304 357.109 122.632 357.109 112.84C357.109 104.2 351.925 99.016 341.557 99.016C334.069 99.016 326.005 104.2 321.109 111.4C323.701 108.808 326.005 108.232 328.021 108.232C330.037 108.232 331.477 109.384 331.477 111.4C331.477 114.856 329.461 119.752 326.293 125.224C318.229 139.336 308.437 153.448 301.813 162.664C286.261 184.84 265.813 200.968 257.461 200.968C254.581 200.968 252.565 199.528 252.565 196.072C252.565 190.312 260.917 176.776 272.149 160.36C287.125 138.76 295.477 124.072 295.477 112.264C295.477 103.912 289.717 98.44 279.349 98.44C263.509 98.44 248.245 112.264 243.925 126.664C251.701 114.568 259.765 108.232 265.237 108.232C267.829 108.232 268.981 109.672 268.981 111.976C268.981 118.312 259.477 133 245.365 154.024C233.845 171.016 229.237 181.384 229.237 190.6C229.237 201.256 237.301 207.304 247.381 207.304C266.965 207.304 285.397 189.16 299.797 169.864C300.661 169 300.949 169.576 300.373 170.44C296.917 175.912 294.037 183.976 294.037 190.024C294.037 200.392 300.373 207.88 313.621 207.88Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M436.52 144.808C422.696 164.104 415.784 177.064 415.784 188.872C415.784 200.104 422.696 207.88 435.944 207.88C450.056 207.88 461.576 198.952 471.656 187.432C480.008 177.64 486.632 166.696 489.224 157.192C483.464 167.56 478.28 175.336 469.64 185.416C460.136 196.36 451.208 201.832 445.736 201.832C441.416 201.832 439.112 198.952 439.112 195.496C439.112 187.72 446.312 175.912 459.848 156.328C472.808 137.896 479.432 126.664 479.432 116.008C479.432 105.352 471.08 99.016 459.848 99.016C440.84 99.016 422.696 118.888 408.872 137.032C408.008 137.896 407.144 137.32 408.008 136.168C412.904 129.544 417.8 119.752 417.8 112.264C417.8 104.488 412.616 98.44 401.672 98.44C384.68 98.44 370.28 113.128 365.96 126.088C373.448 115.72 380.936 108.232 387.272 108.232C389.576 108.232 391.304 109.672 391.304 112.552C391.304 118.888 381.224 134.152 368.84 153.736C359.336 168.712 355.304 180.808 355.304 189.448C355.304 200.392 362.504 206.728 372.296 207.592C370.28 205 374.6 195.208 380.936 183.688C387.56 171.592 397.064 156.04 409.16 140.776C427.016 118.024 441.992 105.928 450.92 105.928C454.376 105.928 455.816 108.232 455.816 110.824C455.816 117.736 447.464 129.544 436.52 144.808Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M559.735 207.88C573.559 207.88 584.791 199.24 594.583 187.72C602.071 178.792 609.271 167.848 612.439 157.192C606.391 168.136 600.919 176.2 592.279 185.992C583.351 196.36 574.711 201.832 568.663 201.832C564.343 201.832 562.327 198.952 562.327 195.496C562.327 190.888 564.631 184.552 569.527 175.912C579.031 158.344 600.055 124.936 616.471 101.32C613.591 100.168 608.983 111.688 597.463 111.688C589.111 111.688 582.199 111.4 579.031 109.96C579.607 100.168 572.407 97.288 564.631 97.288C543.319 97.288 520.567 109.096 499.831 133C484.855 149.704 477.655 169.288 477.655 183.976C477.655 199.528 485.719 207.304 499.255 207.304C510.487 207.304 519.127 200.68 527.191 192.04C532.087 186.856 538.423 178.216 541.591 173.608C542.455 172.456 543.031 173.32 542.455 174.184C541.303 176.488 538.423 182.536 538.423 189.16C538.423 200.392 545.047 207.88 559.735 207.88ZM576.151 113.704L562.039 137.032C552.535 152.296 538.423 175.048 526.615 188.296C518.839 196.936 511.639 201.832 506.167 201.832C502.423 201.832 500.407 199.528 500.407 195.496C500.407 182.536 515.095 159.208 522.583 147.112C531.799 133 555.127 101.32 569.527 101.32C574.423 101.32 577.591 105.64 576.151 113.704Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M600.554 179.368C600.554 198.952 617.834 207.592 638.858 207.592C663.914 207.592 698.762 191.464 699.338 160.36C699.914 145.672 691.274 133.288 682.058 125.512C708.842 116.584 730.154 104.776 730.73 85.192C731.594 67.048 714.314 58.408 696.17 58.408C671.114 58.408 637.994 69.064 637.994 101.896C637.994 114.568 645.77 124.936 651.53 130.984C619.85 140.2 600.554 159.208 600.554 179.368ZM675.722 169C675.722 187.72 661.322 204.712 639.434 204.424C624.17 204.424 617.258 192.616 617.258 179.944C617.258 160.36 628.49 142.504 653.546 133.288C660.746 140.2 675.722 153.16 675.722 169ZM661.61 93.256C661.61 70.504 678.602 61.288 695.882 61.288C708.554 61.576 716.33 70.504 716.33 81.448C716.33 99.016 702.218 114.568 679.466 123.208C670.538 115.432 661.61 105.064 661.61 93.256Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1)"
        />
      </svg>
    </div>
  );
}
export default Logo;
