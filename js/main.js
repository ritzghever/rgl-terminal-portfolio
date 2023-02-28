var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var input = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = 0;
var commands = [];

setTimeout(function () {
  loopLines(banner, "color-ban");
  input.focus();
});

window.addEventListener("keyup", enterKey);

input.value = "";
command.innerHTML = input.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (e.keyCode == 13) {
    commands.push(command.innerHTML);
    git = commands.length;
    addLine("");
    addText("righli@righli.com", "terminal-text");
    addText(":", "color-text");
    addText("~", "color-text2");
    addText("$ ", "color-text");
    addText(command.innerHTML, "color-text");
    commandprompt(command.innerHTML);
    command.innerHTML = "";
    input.value = "";
  }
  if (e.keyCode == 38 && git != 0) {
    git -= 1;
    input.value = commands[git];
    command.innerHTML = input.value;
  }
  if (e.keyCode == 40 && git != commands.length) {
    git += 1;
    if (commands[git] === undefined) {
      input.value = "";
    } else {
      input.value = commands[git];
    }
    command.innerHTML = input.value;
  }
}

function commandprompt(cmd) {
  switch (cmd) {
    case "":
      break;
    case "banner":
      loopLines(banner, "color-ban margin");
      break;
    case "help":
      loopLines(help, "color-com margin");
      break;
    case "about":
      loopLines(about, "color-text margin");
      break;
    case "projects":
      loopLines(projects, "color-text margin");
      break;
    case "socials":
      loopLines(socials, "color-com margin");
      break;
    // Social Networks
    case "linkedin":
      addLine("Opening LinkedIn...", "color-text");
      newTab(linkedin, "color-text margin");
      break;
    case "instagram":
      addLine("Opening Instagram...", "color-text");
      newTab(instagram, "color-text margin");
      break;
    case "github":
      addLine("Opening GitHub...", "color-text");
      newTab(github, "color-text margin");
      break;
    case "email":
      addLine(
        'Opening mailto:<a href="mailto:ritzghever@gmail.com">ritzghever@gmail.com</a>...',
        "color-text"
      );
      newTab(email, "color-text margin");
      break;
    case "clear":
      setTimeout(function () {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    default:
      addLine(
        '<span class="inherit">Command not found. For a list of commands, type <span class="command">\'help\'</span>.</span>',
        "error",
        100
      );
      break;
  }
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function addText(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    var next = document.createElement("a");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}

function autoCorrect(word) {
  console.log(word);
  return word;
}
