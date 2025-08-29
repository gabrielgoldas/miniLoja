import React from "react";

const Navbar = () => {
  return (
    <header>
      <div>
        <img src="/logo.png" alt="Logo" aria-label="Logo" />
      </div>

      <nav>
        <button aria-label="Botão para mudar o tema"></button>
        <button>
          <img
            src="/cart.png"
            alt="Carrinho"
            aria-label="Botão de carrinho de compras"
          />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
