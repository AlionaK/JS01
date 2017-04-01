function QuadraticEquation(a, b, c) {
    var x1, x2, Discriminant;
    var Result = '';
    Discriminant = b * b - 4 * a * c;
    if (Discriminant > 0) {
        x1 = (-b + Math.sqrt(Discriminant)) / 2 * a;
        x2 = (-b - Math.sqrt(Discriminant)) / 2 * a;
        Result = 'Перший корінь рівняння = ' + x1 + '<br>Другий корінь рівняння = ' + x2;
    }
    else if (Discriminant < 0) {
        Result = "Рівняння дійсних коренів не має";
    }
    else {
        x1 = -b / 2 * a;
        Result = 'Корінь рівняння = ' + x1;
    }
    return Result;
}
var a = Number(prompt('Введіть перший коефіцієнт'));
var b = Number(prompt('Введіть другий коефіцієнт'));
var c = Number(prompt('Введіть третій коефіцієнт'));
document.write(QuadraticEquation(a, b, c));
