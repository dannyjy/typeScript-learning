class Logger {
  static logs: Array<{ timestamp: number, message: string }> = [];

  addLog(message: string) {
    Logger.logs.push({ timestamp: Date.now(), message });
  }

  static clearLogs() {
    this.logs = [];
  }
}


const logger = new Logger()
logger.addLog("Hello, World")
logger.addLog("Hey there")
Logger.logs.push({timestamp: 454534, message: "Hello, Backy"})
console.log(Logger.logs)
Logger.clearLogs()

console.log(Logger.logs)