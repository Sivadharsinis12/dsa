# JavaScript Skill Assessment: Task Management System

Hi,

We would like to assess your JavaScript skills through a small practical
coding assignment.

## Task

Build a **Simple Task Management System using vanilla JavaScript**.

## Functional Requirements

Create a JavaScript application that allows users to:

1.  Add a new task.
2.  Mark a task as completed.
3.  Delete a task.
4.  View all pending tasks.
5.  View all completed tasks.
6.  Display the total number of tasks, completed tasks, and pending
    tasks.

## Task Structure

Each task should be represented as an object containing:

  -----------------------------------------------------------------------
  Property                Type                    Description
  ----------------------- ----------------------- -----------------------
  `id`                    Unique value            A unique identifier for
                                                  the task

  `title`                 String                  The task name

  `completed`             Boolean                 Whether the task is
                                                  completed (`true` or
                                                  `false`)
  -----------------------------------------------------------------------

## Additional Scenarios to Handle

Make sure your implementation handles the following cases:

-   Attempting to complete a task that does not exist.
-   Preventing task titles that are empty or contain only whitespace.
-   Ensuring task IDs remain unique.
-   Removing unnecessary leading, trailing, and extra spaces from task
    titles.
-   Deleting one task without changing or deleting other tasks.

## Technical Requirements

-   Use **vanilla JavaScript**.
-   Do not use React or any external libraries.
-   Use appropriate JavaScript concepts, including arrays, objects,
    functions, and array methods such as `map()`, `filter()`, and
    `find()`.
-   Write clean, reusable, and readable code.
-   Test your implementation using `console.log()`.

## Submission Instructions

1.  Create a file named **`task-manager.js`**.
2.  Implement all the required functionalities and handle the additional
    scenarios.
3.  Include `console.log()` statements that demonstrate how your
    implementation works.
4.  Share the completed `task-manager.js` source code for review.

## Expected Outcome

The submitted program should demonstrate that you can manage a
collection of tasks, update task status, remove individual tasks, filter
tasks by completion status, and calculate task counts reliably.

Please keep the implementation simple and focus on correctness, code
quality, and handling the specified edge cases.
