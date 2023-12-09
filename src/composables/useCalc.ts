/*   
  Пример использования функции:
  const w = 20; // ширина в мм
  const h = 10; // высота в мм
  const t = 0.7; // толщина стенки в мм
  const l = 1000; // длина в мм, для 1 погонного метра
  const density = 7871; // плотность материала в кг/м^3 

  const mass = calculatePipeMass(w, h, t, l, density);
  console.log(`Масса 1 погонного метра трубы: ${mass.toFixed(3)} кг`);
*/

const calculateSquarePipeMass = (w: number, h: number, t: number, l: number, density: number) => {
  // Преобразование из мм в м
  w = w / 1000;
  h = h / 1000;
  t = t / 1000;
  l = l / 1000; // В этом случае не нужно, так как ищем массу на 1 метр

  // Расчет площади внешнего и внутреннего сечения трубы
  const ea = w * h;
  const iw = w - 2 * t;
  const ih = h - 2 * t;
  const ia = iw * ih;

  // Расчет массы трубы
  const mass = (ea - ia) * l * density;
  return mass;
};

/*  
   Пример использования:
  let d = 30; // в миллиметрах
  let t = 0.8; // в миллиметрах
  let l = 1000; // в миллиметрах, для 1 погонного метра
  let density = 7871; // плотность материала в кг/м^3

  console.log(calculatePipeCircleMass(d, t, l, density).toFixed(3)); 
*/

const calculateCirclePipeMass = (d: number, t: number, l: number, density: number) => {
  // Переводим миллиметры в метры
  let R_outer = d / 2 / 1000; // внешний радиус в метрах
  let R_inner = (d - 2 * t) / 2 / 1000; // внутренний радиус в метрах
  let L = l / 1000; // длина в метрах

  // Рассчитываем объемы внешнего и внутреннего цилиндров
  let V_outer = Math.PI * Math.pow(R_outer, 2) * L;
  let V_inner = Math.PI * Math.pow(R_inner, 2) * L;

  // Рассчитываем объем трубы
  let V_pipe = V_outer - V_inner;

  // Рассчитываем массу трубы
  let mass = density * V_pipe;

  return mass; // масса в килограммах
};

export { calculateCirclePipeMass, calculateSquarePipeMass };
