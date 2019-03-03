import Utils from "~/scripts/utils";

const i18nPrefix = "components.site_layout.day_night";

export default {
  data() {
    let dS, nS;
    const regexTime = /([0-9]{2}):([0-9]{2})/;
    const cookieDayStart = this.$cookies.get("dayStart");
    const cookieNightStart = this.$cookies.get("nightStart");
    dS = new Date();
    if (cookieDayStart && regexTime.test(cookieDayStart)) {
      const match = regexTime.exec(cookieDayStart);
      dS.setUTCHours(parseInt(match[1]) - 1);
      dS.setUTCMinutes(match[2]);
    } else {
      dS.setUTCHours(7);
      dS.setUTCMinutes(0);
      this.$cookies.set("dayStart", this.$moment(dS).format("HH:mm"), {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
    }

    nS = new Date();
    if (cookieNightStart && regexTime.test(cookieNightStart)) {
      const match = regexTime.exec(cookieNightStart);
      nS.setUTCHours(parseInt(match[1]) - 1);
      nS.setUTCMinutes(match[2]);
    } else {
      nS.setUTCHours(18);
      nS.setUTCMinutes(30);
      this.$cookies.set("nightStart", this.$moment(nS).format("HH:mm"), {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
    }

    return {
      i18nPrefix: i18nPrefix,
      dayStart: dS,
      nightStart: nS
    };
  },
  computed: {
    defaultDayStart() {
      return this.$moment()
        .hour(8)
        .minute(0)
        .toDate();
    },
    defaultNightStart() {
      return this.$moment()
        .hour(19)
        .minute(30)
        .toDate();
    }
  },
  watch: {
    dayStart(val) {
      this.$cookies.set("dayStart", this.$moment(val || this.defaultDayStart).format("HH:mm"), {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
      this.$emit("dayStartChange");
    },
    nightStart(val) {
      this.$cookies.set("nightStart", this.$moment(val || this.defaultNightStart).format("HH:mm"), {
        path: "/",
        expires: Utils.getDefaultCookieExpireTime()
      });
      this.$emit("nightStartChange");
    }
  },
  methods: {
    resetNightDay() {
      const dS = new Date();
      dS.setUTCHours(7);
      dS.setUTCMinutes(0);
      const nS = new Date();
      nS.setUTCHours(18);
      nS.setUTCMinutes(30);
      this.dayStart = dS;
      this.nightStart = nS;
    }
  }
};
