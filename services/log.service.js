import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed("ERROR") + " " + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen("MESSAGE") + " " + message);
};
const printHelp = () => {
  console.log(
    dedent` ${chalk.bgCyan(" HELP ")} 
    Без параметров - вывод погоды 
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
    `
  );
};

const printWeather = (res, icon) => {
  console.log(
    dedent` ${chalk.bgYellow(" WEATHER ")} 
    Погода у вашому місті: ${res.name} ${icon} ${res.weather[0].description}
    Температура: ${res.main.temp} (відчуваеться як ${res.main.feels_like})
    Вологість: ${res.main.humidity}%
    Швидкість вітру: ${res.wind.speed}

        `
  );
};

export { printError, printSuccess, printHelp, printWeather };
