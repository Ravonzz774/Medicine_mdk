tailwind.config = {
  theme: {
    extend: {
      opacity: {
        10: ".9",
        9: ".8",
        8: ".7",
        7: ".6",
        6: ".5",
        5: ".4",
        4: ".3",
        3: ".2",
        2: ".1",
        1: ".05",
      },

      colors: {
        primary: "#12ccf4",
        primary_black: "#062126",
        white: "#ffffff",
        "#0F97B5": "#0f97b5",
        "#E5661E": "#e5661e",
        "#CF7D4E": "#cf7d4e",
        new_primary: "#24bee0",
      },
      fontSize: {
        xs: "0.75rem", //12px
        sm: "0.875rem", //14px
        base: "1rem", //16px
        lg: "1.25rem", //20px
        xl: "1.5rem", //24px
        "2xl": "3rem", //48px
        "3xl": "4.5rem", //72px
      },
      fontFamily: { poppins: "Poppins" },
      borderRadius: {
        none: "0", //0px
        xs: "0.625rem", //10px
        sm: "1.25rem", //20px
        default: "1.875rem", //30px
        lg: "2.5rem", //40px
        xl: "2.8125rem", //45px
        "2xl": "2.9375rem", //50px
        "3xl": "3.4375rem", //70px
        "4xl": "3.875rem", //80px
        "5xl": "4.25rem", //90px
        full: "9999px", //full
      },

      boxShadow: {
        default: "0px 24px 61px -14px rgba(15, 151, 181, 0.14)",
        doctors: "0px 35px 55px -12px rgba(170, 71, 15, 0.26)",
      },

      backgroundImage: {
        calendar: "url('./img/calendar-form.svg')",
        time: "url('./img/time-form.svg')",
      },
    },

    screens: {
      sm: "366px",
      md: "880px",
      lg: "1180px",
    },
  },
};
