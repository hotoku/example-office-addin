/* global clearInterval, console, setInterval */

/**
 * Add two numbers
 * @customfunction
 * @param {number} first First number
 * @param {number} second Second number
 * @returns {number} The sum of the two numbers.
 */
export function add(first, second) {
  return first + second;
}

/**
 * Displays the current time once a second
 * @customfunction
 * @param {CustomFunctions.StreamingInvocation<string>} invocation Custom function invocation
 */
export function clock(invocation) {
  const timer = setInterval(() => {
    const time = currentTime();
    invocation.setResult(time);
  }, 1000);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}

/**
 * Returns the current time
 * @returns {string} String with the current time formatted for the current locale.
 */
export function currentTime() {
  return new Date().toLocaleTimeString();
}

/**
 * Increments a value once a second.
 * @customfunction
 * @param {number} incrementBy Amount to increment
 * @param {CustomFunctions.StreamingInvocation<number>} invocation
 */
export function increment(incrementBy, invocation) {
  let result = 0;
  const timer = setInterval(() => {
    result += incrementBy;
    invocation.setResult(result);
  }, 1000);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}

/**
 * Writes a message to console.log().
 * @customfunction LOG
 * @param {string} message String to write.
 * @returns String to write.
 */
export function logMessage(message) {
  console.log(message);

  return message;
}

/**
 * Gets the star count for a given Github repository.
 * @customfunction
 * @param {string} userName string name of Github user or organization.
 * @param {string} repoName string name of the Github repository.
 * @return {number} number of stars given to a Github repository.
 */
export async function getStarCount(userName, repoName) {
  try {
    //You can change this URL to any web request you want to work with.
    const url = "https://api.github.com/repos/" + userName + "/" + repoName;
    const response = await fetch(url);
    //Expect that status code is in 200-299 range
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const jsonResponse = await response.json();
    return jsonResponse.watchers_count;
  } catch (error) {
    return error;
  }
}

/**
 * calculate prediction by prophet
 * @customfunction
 * @return {string} status code
 */
export async function prophet() {
  const url = "https://pred.inctore.com/api/predict";
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        ds: ["2023-01-01", "2023-01-02"],
        y: [1, 2],
        ds2: ["2023-01-03"],
      }),
    });
  } catch (error) {
    return JSON.stringify(error);
  }
  return "ok";
}

/**
 * calculate prediction by prophet
 * @customfunction
 * @return {string} status code
 */
export async function home() {
  const url = "https://pred.inctore.com/";
  try {
    const response = await fetch(url);
    const text = await response.text();
    return text;
  } catch (error) {
    return JSON.stringify(error);
  }
}
