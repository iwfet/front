export const Umit = ({ state }) => {
  return (
    <div className="flex items-center gap-1">
      <svg
        width="17"
        height="22"
        viewBox="0 0 17 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9432 3.90384C11.7501 2.50273 10.4072 1.24108 8.93949 0.142192C8.80956 0.0496445 8.65477 0 8.49614 0C8.3375 0 8.18271 0.0496445 8.05278 0.142192C6.58774 1.24153 5.24751 2.50317 4.05682 3.90384C1.40153 7.00449 0 10.2731 0 13.3571C0 15.6493 0.895533 17.8477 2.48959 19.4685C4.08365 21.0894 6.24566 22 8.5 22C10.7543 22 12.9163 21.0894 14.5104 19.4685C16.1045 17.8477 17 15.6493 17 13.3571C17 10.2731 15.5985 7.00449 12.9432 3.90384ZM8.5 20.4286C6.65617 20.4265 4.88844 19.6808 3.58465 18.3551C2.28087 17.0294 1.5475 15.2319 1.54545 13.3571C1.54545 7.7362 6.90335 3.04445 8.5 1.76765C10.0966 3.04445 15.4545 7.73423 15.4545 13.3571C15.4525 15.2319 14.7191 17.0294 13.4153 18.3551C12.1116 19.6808 10.3438 20.4265 8.5 20.4286ZM13.8985 14.2744C13.6981 15.4124 13.1596 16.4607 12.3556 17.2781C11.5515 18.0955 10.5204 18.6428 9.40119 18.8463C9.3587 18.8532 9.31576 18.8568 9.27273 18.8571C9.0789 18.8571 8.89216 18.7829 8.74956 18.6495C8.60696 18.516 8.5189 18.3329 8.50285 18.1364C8.48681 17.94 8.54394 17.7446 8.66293 17.5891C8.78191 17.4335 8.95406 17.329 9.14523 17.2965C10.7457 17.0224 12.1038 15.6415 12.3752 14.0112C12.4096 13.8056 12.5228 13.6224 12.69 13.5018C12.8572 13.3811 13.0646 13.333 13.2668 13.3679C13.4689 13.4028 13.6491 13.5179 13.7677 13.6879C13.8864 13.8579 13.9338 14.0689 13.8994 14.2744H13.8985Z"
          fill="#5A6BFF"
        />
      </svg>

      <span className="text-[#5A6BFF] text-[16px] font-medium leading-[27px] max-w-[115px]">
        Umidade {state} gm³
      </span>
    </div>
  );
};