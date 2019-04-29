## What is event loop? What is the difference between call stack and task queue?

The call stack are function calls executed in order by last in, first out.
The task queue are filled with async fn calls. When the call stack is empty.
The first item in the task queue is added to the callstack to be executed.
When the callstack is executing, user interaction with the browser is blocked.