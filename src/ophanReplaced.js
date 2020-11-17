export default {
  record: (value) => {
    if (window.guardian.ophan.record) {
      window.guardian.ophan.record(value);
    }
  },
};
