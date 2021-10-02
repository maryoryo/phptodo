<?php

require_once(__DIR__ . '/../app/config.php');

use Myapp\Database;
use Myapp\Todo;
use Myapp\Utils;

$pdo = Database::getInstance();

$todo = new Todo($pdo);
$todo->processPost();
$todos = $todo->getAll();

?>


<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>My Todos</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <main>
    <header>
      <h1>Todos</h1>
      <!-- <form action="?action=purge" method="post"> -->
        <span
          data-token="<?= Utils::h($_SESSION['token']) ?>"
          class="purge">
          Purge
        </span>
        <!-- <input type="hidden" name="token" value=""> -->
      <!-- </form> -->
    </header>

    <form action="?action=add" method="post">
      <input type="text" name="title" placeholder="Type new todo.">
      <input type="hidden" name="token" value="<?= Utils::h($_SESSION['token']) ?>">
      <!-- <button>Add</button> -->
    </form>

    <ul>
      <?php foreach ($todos as $todo): ?>
        <li>
          <!-- <form action="?action=toggle" method="post"> -->
            <input
              type="checkbox"
              data-id="<?= Utils::h($todo->id) ?>"
              data-token="<?= Utils::h($_SESSION['token']) ?>"
              <?= $todo->is_done ? 'checked' : ''; ?>>
            <!-- <input type="hidden" name="id" value="<?#= Utils::h($todo->id) ?>">
            <input type="hidden" name="token" value="<?#= Utils::h($_SESSION['token']) ?>"> -->
          <!-- </form> -->
          <span><?= Utils::h($todo->title); ?></span>

          <!-- <form action="?action=delete" method="post" class="delete-form"> -->
            <span
              data-id="<?= Utils::h($todo->id) ?>"
              data-token="<?= Utils::h($_SESSION['token']) ?>"
              class="delete">
              x
            </span>
            <!-- <input type="hidden" name="id" value="">
            <input type="hidden" name="token" value=""> -->
          <!-- </form> -->
        </li>
      <?php endforeach; ?>
    </ul>
  </main>
  <script src="js/main.js"></script>
</body>
</html>