const ToolCard = ({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) => (
  <div className="tool-card">
    <img src={imageUrl} alt={title} className="tool-image" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const ToolsSection = () => {
  return (
    <div className="tools-page">
      <section className="intro">
        <h1>My Development Setup</h1>
        <p>
          A productive developer setup is crucial for maintaining focus and
          efficiency. Here's a look at the hardware, software, and accessories I
          use to build awesome things with React, React Native, and TypeScript.
        </p>
      </section>

      <section className="hardware-setup">
        <h2>Hardware Setup</h2>
        <div className="tool-cards">
          <ToolCard
            title="MacBook Pro"
            description="My main machine is a 16-inch MacBook Pro with an M1 chip. It's fast, reliable, and provides the performance I need for development."
            imageUrl="/path-to-icons/macbook-icon.svg"
          />
          <ToolCard
            title="External Monitor"
            description="I use a Dell 27-inch 4K monitor for extra screen real estate, which is great for multitasking and having multiple code windows open."
            imageUrl="/path-to-icons/monitor-icon.svg"
          />
          <ToolCard
            title="Logitech MX Master 3 Mouse"
            description="This ergonomic mouse is perfect for long coding sessions. It has customizable buttons and works seamlessly with my MacBook."
            imageUrl="/path-to-icons/mouse-icon.svg"
          />
          <ToolCard
            title="Keychron K2 Mechanical Keyboard"
            description="I love the tactile feedback of my Keychron K2 mechanical keyboard. It’s Bluetooth-enabled and perfect for typing all day."
            imageUrl="/path-to-icons/keyboard-icon.svg"
          />
        </div>
      </section>

      <section className="editor-setup">
        <h2>Editor Setup</h2>
        <div className="tool-cards">
          <ToolCard
            title="Visual Studio Code"
            description="VS Code is my go-to code editor. I love its speed, versatility, and the fact that it supports TypeScript out of the box."
            imageUrl="/path-to-icons/vscode-icon.svg"
          />
          <ToolCard
            title="Prettier"
            description="Prettier is an essential tool in my setup. It automatically formats my code to ensure consistency and readability."
            imageUrl="/path-to-icons/prettier-icon.svg"
          />
          <ToolCard
            title="ESLint"
            description="I use ESLint to enforce code quality and consistency. It helps me catch potential bugs early in the development process."
            imageUrl="/path-to-icons/eslint-icon.svg"
          />
          <ToolCard
            title="GitLens"
            description="GitLens is an amazing VS Code extension that enhances Git capabilities. It helps me navigate code changes and collaborate efficiently."
            imageUrl="/path-to-icons/gitlens-icon.svg"
          />
        </div>
      </section>

      <section className="accessories">
        <h2>Accessories</h2>
        <div className="tool-cards">
          <ToolCard
            title="Bose QuietComfort 35 II"
            description="These noise-cancelling headphones are a lifesaver during long coding sessions and help me stay focused in noisy environments."
            imageUrl="/path-to-icons/bose-headphones-icon.svg"
          />
          <ToolCard
            title="Standing Desk"
            description="I use a standing desk to switch between sitting and standing throughout the day, which helps with my posture and focus."
            imageUrl="/path-to-icons/desk-icon.svg"
          />
          <ToolCard
            title="ErgoFoam Foot Rest"
            description="For better posture, I use an ergonomic footrest that helps reduce strain while sitting at my desk for long hours."
            imageUrl="/path-to-icons/footrest-icon.svg"
          />
        </div>
      </section>

      <section className="software-tools">
        <h2>Software Tools</h2>
        <div className="tool-cards">
          <ToolCard
            title="Git & GitHub"
            description="Version control is critical for my workflow. I use Git for local versioning and GitHub for collaborating with teams and hosting repositories."
            imageUrl="/path-to-icons/git-icon.svg"
          />
          <ToolCard
            title="Docker"
            description="Docker allows me to work with containerized environments, making it easier to run and deploy apps consistently across different machines."
            imageUrl="/path-to-icons/docker-icon.svg"
          />
          <ToolCard
            title="Trello"
            description="I use Trello for task management, keeping track of features, bugs, and goals to stay organized and prioritize tasks effectively."
            imageUrl="/path-to-icons/trello-icon.svg"
          />
        </div>
      </section>

      <section className="conclusion">
        <h2>Why This Setup Works For Me</h2>
        <p>
          Each of these tools helps me stay productive, organized, and
          comfortable while working. Whether it's my ergonomic setup,
          lightning-fast MacBook, or the software I use for development, this
          setup allows me to focus on creating and delivering quality code.
        </p>
      </section>
    </div>
  );
};

export default ToolsSection;
