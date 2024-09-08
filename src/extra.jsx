import "./extra.css";

export function CodeBlock() {
  return (
    <div className="code-block-container">
      <div className="code-block">
        <div className="code-block-header">
          <div className="red" />
          <div className="yellow" />
          <div className="green" />
        </div>
        <pre>
          <code>
            npm i <span>use-zman</span>
          </code>
        </pre>
      </div>
    </div>
  );
}

export function SocialIcons() {
  return (
    <div className="social-icons-container">
      <a
        target="_blank"
        href="https://github.com/hoshangdev/use-zman"
        className="social-container">
        <GitHubIcon />
        <p>NPM Source Code</p>
        <StarIcon />
      </a>
      <a
        target="_blank"
        href="https://www.npmjs.com/package/use-zman"
        className="social-container">
        <NPMIcon />
        <p>NPM Package</p>
        <PackageIcon />
      </a>
      <a
        target="_blank"
        href="https://github.com/hoshangdev/use-zman-tutorial"
        className="social-container">
        <GitHubIcon />
        <p>Tutorial Source Code</p>
        <StarIcon />
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/watch?v=W-1_OubZTik"
        className="social-container">
        <YoutubeIcon />
        <p>Youtube Tutorial</p>
        <ClickIcon />
      </a>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="yellow">
      <path
        fill-rule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

function NPMIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 128 128">
      <path
        fill="#cb3837"
        d="M0 7.062C0 3.225 3.225 0 7.062 0h113.88c3.838 0 7.063 3.225 7.063 7.062v113.88c0 3.838-3.225 7.063-7.063 7.063H7.062c-3.837 0-7.062-3.225-7.062-7.063zm23.69 97.518h40.395l.05-58.532h19.494l-.05 58.581h19.543l.05-78.075l-78.075-.1l-.1 78.126z"
      />
      <path
        fill="#fff"
        d="M25.105 65.52V26.512H40.96c8.72 0 26.274.034 39.008.075l23.153.075v77.866H83.645v-58.54H64.057v58.54H25.105z"
      />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 32 32">
      <g fill="none">
        <path
          fill="#f3c07b"
          d="M15.35 2.143c.32-.19.71-.19 1.02 0l10.92 6.64c.26.16.42.45.42.75L15.86 17.5L4 9.632v-.1c0-.3.16-.59.42-.74z"
        />
        <path
          fill="#ffce7c"
          d="m15.856 16.246l11.36-6.9a.328.328 0 0 1 .496.282v12.34a1.73 1.73 0 0 1-.83 1.48l-10.64 6.46a.3.3 0 0 1-.087.03a.3.3 0 0 1-.083.011a.9.9 0 0 1-.682-.083h.006L13 19z"
        />
        <path
          fill="#e19747"
          d="M15.86 29.622v-13.37l-11.35-6.9a.331.331 0 0 0-.51.28v12.34c0 .61.32 1.17.83 1.48l10.57 6.42a.3.3 0 0 0 .46-.25"
        />
        <path
          fill="#d3d3d3"
          d="M14.5 26.782v-1.96c0-.23-.12-.44-.31-.56l-2.8-1.69c-.19-.11-.43.02-.43.24v1.96c0 .23.12.44.31.56l2.8 1.69c.19.11.43-.02.43-.24"
        />
        <path
          fill="#8c5543"
          d="M11.76 16.553v-4.56l-3.28-.22v3.16c0 .1.05.2.14.26l2.68 1.63c.2.11.46-.03.46-.27"
        />
        <path fill="#a56953" d="m20.34 4.563l-11.86 7.21l3.28 2l11.86-7.2z" />
      </g>
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.43em"
      height="1.43em"
      viewBox="0 0 256 180">
      <path
        fill="#f00"
        d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
      />
      <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" />
    </svg>
  );
}

function ClickIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.43em"
      height="1.43em"
      viewBox="0 0 20 20">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M6.672 1.911a1 1 0 1 0-1.932.518l.259.966a1 1 0 0 0 1.932-.518zM2.429 4.74a1 1 0 1 0-.517 1.932l.966.259a1 1 0 0 0 .517-1.932zm8.814-.569a1 1 0 0 0-1.415-1.414l-.707.707a1 1 0 1 0 1.415 1.415zm-7.071 7.072l.707-.707A1 1 0 0 0 3.465 9.12l-.708.707a1 1 0 0 0 1.415 1.415m3.2-5.171a1 1 0 0 0-1.3 1.3l4 10a1 1 0 0 0 1.823.075l1.38-2.759l3.018 3.02a1 1 0 0 0 1.414-1.415l-3.019-3.02l2.76-1.379a1 1 0 0 0-.076-1.822z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
