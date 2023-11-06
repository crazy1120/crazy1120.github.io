const localeConverter = (locale: string | undefined) => {
  interface LocaleConverter {
    [key: string]: string;
  }

  const converter: LocaleConverter = {
    tw: "zh-Hant-TW",
  };

  locale = locale === undefined ? "en" : converter[locale] || locale;

  return locale;
};

export default localeConverter;
