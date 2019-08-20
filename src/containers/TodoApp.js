import { connect } from 'react-redux'
import TodoApp from '../ccomponents/TodoApp'
import { inputTask, addTask } from '../actions/tasks'

// 名前のまんまらしい StateをPropsにする（ReduxのやつをReactとして使えるようにするような感じ）
function mapStateToProps({task, tasks}) {
  return {
    task,
    tasks
  }
}

// これも名前のまんま DispatchをPropsにする感じ。
function mapDispatchToProps(dispatch) {
  return {
    addTask(task){
      dispatch(addTask(task))
    },
    inputTask(task){
      dispatch(inputTask(task))
    }
  }
}

// ここで紐付け？
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
