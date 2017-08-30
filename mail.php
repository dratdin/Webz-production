 <?php
      $name = trim($_GET["name"]);
      $email = trim($_GET["email"]);
      $phone = $_GET["phone"];
      $message = trim($_GET["message"]);

      $errors = array();

      if($name == '')
        array_push($errors, 'Введите ваше имя');

      if($email == '')
        array_push($errors, 'Введите почту');

      if(empty($errors) && mail("mrtard47@gmail.com", "Письмо с сайта webz.by !", "Содержание: \n Имя: $name \n E-mail: $email \n Телефон: $phone \n Сообщение: $message")) {
        $data->title = "Спасибо за заявку!";
        $data->text = "Мы свяжемся с вами в ближайшее время.";
      } else {
        $data->title = "Приносим извинения!";
        $data->text = "Во время отправления заявки возникли неполадки, наберите нам по телефону +XXX(XX)XXX-XX-XX или напишите на нашу почту mrtard47@gmail.com";
      }
      $data->errors = $errors;

      $answer = json_encode($data);
      echo $answer;
 ?>


