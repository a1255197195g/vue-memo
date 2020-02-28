/**
 * Created by mengze on 2020/2/28.
 */
const TASK_LIST_NAME = 'task_list'

class Storage {
  static saveList (list) {
    localStorage.setItem(TASK_LIST_NAME, JSON.stringify(list || []))
  }

  static readList () {
    return JSON.parse(localStorage.getItem(TASK_LIST_NAME)) || []
  }
}

export default Storage
