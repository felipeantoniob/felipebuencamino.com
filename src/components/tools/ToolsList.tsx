const toolsAndHardware = [
  {
    name: "Neovim",
    description:
      "A highly customizable text editor, perfect for efficient coding with powerful plugins and an optimized workflow.",
    link: "https://neovim.io/",
  },
  {
    name: "Tmux",
    description:
      "A terminal multiplexer that allows you to split your terminal into multiple panes, making multitasking a breeze.",
    link: "https://github.com/tmux/tmux",
  },
  {
    name: "Alacritty",
    description:
      "A fast, GPU-accelerated terminal emulator that emphasizes simplicity and performance.",
    link: "https://github.com/alacritty/alacritty",
  },
  {
    name: "Lazygit",
    description:
      "A simple terminal UI for git commands, allowing you to manage your repositories efficiently without leaving the terminal.",
    link: "https://github.com/jesseduffield/lazygit",
  },
  {
    name: "Zoxide",
    description:
      "A smarter way to navigate your filesystem, with fast access to frequently used directories based on your usage history.",
    link: "https://github.com/ajeetdsouza/zoxide",
  },
  // Hardware Section
  {
    name: "M1 MacBook Air",
    description:
      "My primary workhorse for development, featuring the powerful Apple M1 chip that provides great performance and battery life for both coding and media.",
    link: "https://www.apple.com/macbook-air-m1/",
  },
  {
    name: "Keychron K7",
    description:
      "A compact and versatile mechanical keyboard with hot-swappable keys and customizable RGB lighting. It’s perfect for a tactile and comfortable typing experience.",
    link: "https://www.keychron.com/products/keychron-k7",
  },
  {
    name: "Logitech Pebble Mouse",
    description:
      "A simple, compact wireless mouse that pairs well with my setup, offering quiet clicks and smooth navigation, ideal for productivity and portability.",
    link: "https://www.logitech.com/en-us/product/pebble-m350-wireless-mouse",
  },
  {
    name: "Apple AirPods Pro",
    description:
      "For noise-canceling audio during focus time, whether I’m coding or taking a call, these provide great sound and comfort for long hours of use.",
    link: "https://www.apple.com/airpods-pro/",
  },
  {
    name: "BenQ PD2700U",
    description:
      "A 27-inch 4K monitor for precise, color-accurate development and design work, offering a great visual experience for both coding and creative tasks.",
    link: "https://www.benq.com/product/monitor/pd2700u",
  },
  {
    name: "Postman",
    description:
      "A powerful tool for API development and testing, allowing me to make requests, inspect responses, and automate API tests.",
    link: "https://www.postman.com/",
  },
  {
    name: "Oh My Zsh",
    description:
      "A community-driven framework for managing Zsh configuration, with plugins, themes, and features that enhance my terminal experience.",
    link: "https://ohmyz.sh/",
  },
  {
    name: "Figma",
    description:
      "A collaborative design tool that allows me to work closely with designers to build seamless user interfaces and prototypes.",
    link: "https://www.figma.com/",
  },
];

const ToolsList = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="mb-8 text-center text-3xl font-semibold text-ctp-text">
        Tools & Hardware I Use
      </h2>
      <ul className="space-y-8">
        {toolsAndHardware.map((item) => (
          <li key={item.name} className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-ctp-text">{item.name}</h3>
            <p className="text-ctp-subtext1">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Learn more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolsList;
