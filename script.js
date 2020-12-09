$(document).ready(function(){
//сама функция по появлению картинки
	function showImg(){
	//получаем название картинки
		var dataImg = $(this).attr('data-img');
		//проставляем ссылку на картинкку
		$("#showImgDiv img").attr('src',dataImg);
		//получаем позиуию области для отображения и корректируем
		//отступ от верхнего левого угла наводимой области $(this).offset().top - $(this).offset().left + 
		if ($(this).offset().top > 1130){
				varTop = 10;
				varLeft = 500;
			}
			else if ($(this).offset().top > 1110){
				varTop = 30;
				varLeft = 500;
			}
			else if ($(this).offset().top > 1090){
				varTop = 50;
				varLeft = 500;
			}
			else if ($(this).offset().top > 1070){
				varTop = 70;
				varLeft = 500;
			}
			else if ($(this).offset().top > 1050){
				varTop = 90;
				varLeft = 500;
			}
			else if ($(this).offset().top > 1030){
				varTop = 110;
				varLeft = 500;
			}
			else if ($(this).offset().top > 1010){
				varTop = 130;
				varLeft = 500;
			}
			else if ($(this).offset().top > 990){
				varTop = 150;
				varLeft = 500;
			}
			else{
				varTop = 170;
				varLeft = 500;
			}
		//делаем видимую область и задаем позиуии где отображать
		$("#showImgDiv").css({"top":varTop,"left":varLeft}).show();
	}
	function showImgOff(){
		//отключаем видимость
		$("#showImgDiv").hide();
	}
//добавляем ко всем обектам событие на запуск функции
	$('.text_img').hover(showImg,showImgOff);
})

$(document).ready(function(){
 /**
 * При прокрутке страницы, показываем или срываем кнопку
 */
 $(window).scroll(function () {
 // Если отступ сверху больше 50px то показываем кнопку "Наверх"
 if ($(this).scrollTop() > 50) {
 $('#button-up').fadeIn();
 } else {
 $('#button-up').fadeOut();
 }
 });
 /** При нажатии на кнопку мы перемещаемся к началу страницы */
 $('#button-up').click(function () {
 $('body,html').animate({
 scrollTop: 0
 }, 1000);
 return false;
 });
});
