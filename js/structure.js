// Создаем структуру данных для управления задачами

class TaskManager {
  constructor() {
    this.tasks = new Map();
  }
  addTask(id, task) {
    this.tasks.set(id, {
      ...task,
      status: "new",
      createdAt: new Date(),
    });
  }

  getTask(id) {
    return this.tasks.get(id);
  }

  updateStatus(id, status) {
    const task = this.tasks.get(id);
    if (task) {
      task.status = status;
      this.tasks.set(id, task);
    }
  }
}

// Использование
const taskManager = new TaskManager();
taskManager.addTask(1, { title: "Изучить JavaScript", priority: "high" });
taskManager.updateStatus(1, "in-progress");
// console.log(taskManager.getTask(1));

// ПОМЕТКА ДЛЯ КУРАТОРА: НИХРЕНА НЕ ЯСНО