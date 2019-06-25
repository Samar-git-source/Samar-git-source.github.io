<?php

require_once __DIR__ . '/mailer/Validator.php';
require_once __DIR__ . '/mailer/ContactMailer.php';

if (!Validator::isAjax() || !Validator::isPost()) {
	echo 'Доступ запрещен!';
	exit;
}

$name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : null;
$phone = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : null;

if (empty($name) || empty($phone))) {
	echo 'Все поля обязательны для заполнения.';
	exit;
}

if (!Validator::isValidPhone($phone)) {
	echo 'Телефон не соответствует формату.';
	exit;
}

if (ContactMailer::send($name, $phone)) {
	// echo htmlspecialchars($name) . ', ваше сообщение успешно отправлено.';
	echo "<div  style="position: absolute; top: 30%; left: 50%; width: 300px; height: 100px; margin-left: -150px; padding: 30px">
          <p>Мы перезвоним Вам в течении 15 минут.</p>
        </div>";
} else {
	echo 'Произошла ошибка! Не удалось отправить сообщение.';
}
exit;