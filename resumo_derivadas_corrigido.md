
# 📘 Estudo de Derivadas - Resumo Matemático Básico

> Este arquivo serve como consulta rápida para revisar os principais conceitos matemáticos que auxiliam na resolução de derivadas: operações, potências, raízes, logaritmos e regras de derivação.

---

## 🔢 1. Operações Básicas

### Mínimo Múltiplo Comum (MMC)
- Usado para somar ou subtrair frações.
- Ache o menor número que os denominadores têm em comum.

### Soma e Subtração de Frações
$$
\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}
$$

### Produto e Divisão de Frações
$$
\frac{a}{b} \cdot \frac{c}{d} = \frac{ac}{bd} \\
\frac{a}{b} \div \frac{c}{d} = \frac{a \cdot d}{b \cdot c}
$$

---

## 🧮 2. Potências

### Propriedades
$$
a^m \cdot a^n = a^{m+n} \\
\frac{a^m}{a^n} = a^{m-n} \\
(a^m)^n = a^{m \cdot n}
$$

### Expoente Negativo
$$
a^{-n} = \frac{1}{a^n}
$$

### Potência de Fração
$$
\left( \frac{a}{b} \right)^n = \frac{a^n}{b^n}
$$

---

## 📐 3. Raízes

$$
\sqrt[n]{a^m} = a^{\frac{m}{n}} \\
\sqrt{a} = a^{\frac{1}{2}}
$$

---

## 📊 4. Logaritmos

### Definição
$$
\log_b(a) = x \Rightarrow b^x = a
$$

### Propriedades
$$
\log_b(x \cdot y) = \log_b(x) + \log_b(y) \\
\log_b\left(\frac{x}{y}\right) = \log_b(x) - \log_b(y) \\
\log_b(x^n) = n \cdot \log_b(x) \\
\log_b(b) = 1 \quad ; \quad \log_b(1) = 0 \\
$$

---

## 📘 5. Funções Importantes

### Polinômios
$$
f(x) = a_nx^n + a_{n-1}x^{n-1} + \dots + a_1x + a_0
$$

### Exponenciais
$$
f(x) = a^x \quad ; \quad f(x) = e^x
$$

### Logarítmicas
$$
f(x) = \log_b(x) \quad ; \quad f(x) = \ln(x)
$$

---

## ✏️ 6. Regras de Derivação

### Derivada de Potência
$$
\frac{d}{dx}(x^n) = nx^{n-1}
$$

### Derivada de Constante
$$
\frac{d}{dx}(c) = 0
$$

### Multiplicação por Constante
$$
\frac{d}{dx}(c \cdot f(x)) = c \cdot f'(x)
$$

### Soma e Subtração
$$
\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)
$$

### Regra do Produto
$$
\frac{d}{dx}[f(x) \cdot g(x)] = f'(x)g(x) + f(x)g'(x)
$$

### Regra do Quociente
$$
\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}
$$

### Regra da Cadeia
$$
\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)
$$

---

## 🧠 7. Derivadas Notáveis

| Função               | Derivada                    |
|----------------------|-----------------------------|
| \( f(x) = x^n \)     | \( f'(x) = nx^{n-1} \)       |
| \( f(x) = \sin(x) \) | \( f'(x) = \cos(x) \)        |
| \( f(x) = \cos(x) \) | \( f'(x) = -\sin(x) \)       |
| \( f(x) = \tan(x) \) | \( f'(x) = \sec^2(x) \)      |
| \( f(x) = e^x \)     | \( f'(x) = e^x \)            |
| \( f(x) = \ln(x) \)  | \( f'(x) = \frac{1}{x} \)    |

---

## 📌 Dicas Finais

- Sempre que possível, simplifique a expressão antes de derivar.
- Reescreva raízes e frações como potências com expoentes fracionários.
- Use propriedades dos logaritmos para facilitar a derivação.
- Verifique se a regra da cadeia é aplicável.
