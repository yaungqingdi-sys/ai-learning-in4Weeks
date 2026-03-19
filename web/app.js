const COURSE_DOCS = {
  overview: [
    { id: "readme", label: "README", description: "课程入口与使用方式", path: "../README.md", type: "主文档" },
    { id: "course-overview", label: "课程总览", description: "完整课程大纲", path: "../docs/course-overview.md", type: "主文档" },
    { id: "learning-path", label: "学习路径", description: "4 周路线与节奏", path: "../docs/learning-path.md", type: "主文档" },
    { id: "assessment", label: "考核规则", description: "评分、回炉与复盘", path: "../docs/assessment-policy.md", type: "主文档" },
  ],
  modules: [
    { id: "module-1", label: "模块 1", description: "AI 基础", path: "../docs/modules/module-1-ai-basics.md", type: "模块" },
    { id: "module-2", label: "模块 2", description: "提示词、上下文与协作", path: "../docs/modules/module-2-prompt-context-skill.md", type: "模块" },
    { id: "module-3", label: "模块 3", description: "工具版图", path: "../docs/modules/module-3-tools-landscape.md", type: "模块" },
    { id: "module-4", label: "模块 4", description: "AI Coding 基础", path: "../docs/modules/module-4-ai-coding-basics.md", type: "模块" },
    { id: "module-5", label: "模块 5", description: "搭建学习系统", path: "../docs/modules/module-5-build-learning-system.md", type: "模块" },
    { id: "module-6", label: "模块 6", description: "网络通信基础", path: "../docs/modules/module-6-networking-basics.md", type: "模块" },
    { id: "module-7", label: "模块 7", description: "安全基础", path: "../docs/modules/module-7-security-foundations.md", type: "模块" },
    { id: "module-8", label: "模块 8", description: "误区与边界", path: "../docs/modules/module-8-misconceptions-and-boundaries.md", type: "模块" },
    { id: "module-9", label: "模块 9", description: "Vibe Coding 范式", path: "../docs/modules/module-9-vibe-coding.md", type: "模块" },
  ],
  weeks: [
    { id: "week-1", label: "第 1 周", description: "AI 基础与工具地图", path: "../docs/weeks/week-1.md", type: "周计划" },
    { id: "week-2", label: "第 2 周", description: "提示词与学习协作", path: "../docs/weeks/week-2.md", type: "周计划" },
    { id: "week-3", label: "第 3 周", description: "AI Coding 基础", path: "../docs/weeks/week-3.md", type: "周计划" },
    { id: "week-4", label: "第 4 周", description: "学习系统、网络与边界", path: "../docs/weeks/week-4.md", type: "周计划" },
  ],
  tooling: [
    { id: "template-study-plan", label: "学习计划模板", description: "适合拆 3 到 14 天学习计划", path: "../templates/study-plan-prompt.md", type: "模板" },
    { id: "template-concept", label: "概念学习模板", description: "适合学一个新概念", path: "../templates/concept-learning-prompt.md", type: "模板" },
    { id: "template-project", label: "项目理解模板", description: "适合理解代码项目", path: "../templates/project-understanding-prompt.md", type: "模板" },
    { id: "template-vibe", label: "Vibe Memory Bank 模板", description: "AI 原生开发规划模板", path: "../templates/vibe-memory-bank-prompt.md", type: "模板" },
    { id: "template-quiz", label: "出题模板", description: "把资料转成题库", path: "../templates/quiz-generation-prompt.md", type: "模板" },
    { id: "template-review", label: "回炉模板", description: "错题复盘与补练", path: "../templates/review-and-remediation-prompt.md", type: "模板" },
    { id: "template-skill", label: "简单 Skill 模板", description: "把流程固化成 SOP", path: "../templates/simple-skill-template.md", type: "模板" },
    { id: "skill-study-planner", label: "study-planner", description: "学习计划 skill 示例", path: "../skills/study-planner.md", type: "Skill" },
    { id: "skill-quiz-builder", label: "quiz-builder", description: "题库生成 skill 示例", path: "../skills/quiz-builder.md", type: "Skill" },
    { id: "skill-note-distiller", label: "note-distiller", description: "笔记提炼 skill 示例", path: "../skills/note-distiller.md", type: "Skill" },
  ],
};

const QUIZ_FILES = [
  { id: "week-1", label: "第 1 周测验", path: "../quizzes/week-1.json" },
  { id: "week-2", label: "第 2 周测验", path: "../quizzes/week-2.json" },
  { id: "week-3", label: "第 3 周测验", path: "../quizzes/week-3.json" },
  { id: "week-4", label: "第 4 周测验", path: "../quizzes/week-4.json" },
  { id: "final-exam", label: "期末综合测试", path: "../quizzes/final-exam.json" },
];

const SAMPLE_REPORT_PATH = "../examples/sample_progress_report.md";
const SAMPLE_SUBMISSION_PATH = "../examples/sample_submission.json";

const TAG_SUGGESTIONS = {
  "ai-basics": "回看模块 1，用自己的话解释 AI、大模型和工具分类。",
  search: "把涉及最新信息的任务单独拉出来，练习先找来源再下结论。",
  agent: "再对比一次 Chat 和 Agent 的职责，避免任务建模混乱。",
  prompt: "重写你最常用的一个提示词，补齐目标、背景、约束和输出格式。",
  context: "练习先列已知条件和缺失条件，再向 AI 提问。",
  "meta-prompt": "给自己准备一个“先澄清再回答”的元提示词。",
  collaboration: "把下一次任务拆成人负责、AI 负责、工具负责三列。",
  coding: "再做一次最小改动练习，重点看理解和验证是否到位。",
  verification: "给每次 AI 输出都附一个验证动作，至少包含输入输出检查。",
  "minimal-change": "把大任务拆成单文件或单函数级别，再做一轮练习。",
  git: "回看 Git 和 diff，练习先看修改范围再接受改动。",
  terminal: "复习路径、目录和最小命令集，确保能跟上 AI Coding 流程。",
  "learning-workflow": "把资料、练习、测试、复盘四步写成固定日程。",
  networking: "先回到域名、DNS、IP、端口、HTTP 这一层地图，不要过早钻细节。",
  security: "重读安全基础模块，只保留资产、日志、补丁、配置、权限和授权视角。",
  authorization: "把“先有授权再有动作”写进你的个人学习清单。",
  boundaries: "给自己列一张不碰的高风险任务清单，避免边界失守。",
  review: "每次做题后写 4 句复盘，暴露最真实的理解漏洞。",
  remediation: "把错题变成 24 小时内的补练动作，而不只是对答案。",
};

const state = {
  currentView: "dashboard",
  currentDoc: null,
  currentQuiz: null,
  currentQuizData: null,
  sampleSubmission: null,
};

const pageTitle = document.querySelector("#pageTitle");
const sidebarOverview = document.querySelector("#sidebar-overview");
const sidebarModules = document.querySelector("#sidebar-modules");
const sidebarWeeks = document.querySelector("#sidebar-weeks");
const sidebarTooling = document.querySelector("#sidebar-tooling");
const sidebarQuizzes = document.querySelector("#sidebar-quizzes");
const quickLinks = document.querySelector("#quickLinks");
const readerTitle = document.querySelector("#readerTitle");
const rawFileLink = document.querySelector("#rawFileLink");
const readerContent = document.querySelector("#readerContent");
const quizSelector = document.querySelector("#quizSelector");
const quizForm = document.querySelector("#quizForm");
const quizIntro = document.querySelector("#quizIntro");
const quizActions = document.querySelector("#quizActions");
const quizResult = document.querySelector("#quizResult");

// Mobile Elements
const mobileMenuBtn = document.querySelector("#mobileMenuBtn");
const sidebarBackdrop = document.querySelector("#sidebarBackdrop");
const sidebar = document.querySelector(".sidebar");

init();

async function init() {
  buildSidebar();
  buildQuickLinks();
  bindTopLevelActions();
  initMobileMenu();
  populateQuizSelector();
  state.sampleSubmission = await fetchJson(SAMPLE_SUBMISSION_PATH).catch(() => null);

  window.addEventListener("hashchange", handleHashChange);
  
  // Initial router check
  if (!window.location.hash) {
    window.location.hash = "#dashboard";
  } else {
    handleHashChange();
  }
}

function initMobileMenu() {
  const shell = document.querySelector(".shell");
  
  const toggleSidebar = () => {
    if (window.innerWidth <= 900) {
      sidebar.classList.toggle("open");
    } else {
      shell.classList.toggle("sidebar-collapsed");
      localStorage.setItem("sidebarCollapsed", shell.classList.contains("sidebar-collapsed"));
    }
  };

  const closeSidebar = () => {
    if (window.innerWidth <= 900) {
      sidebar.classList.remove("open");
    }
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", toggleSidebar);
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener("click", closeSidebar);
  }

  // Restore desktop state
  if (window.innerWidth > 900 && localStorage.getItem("sidebarCollapsed") === "true") {
    shell.classList.add("sidebar-collapsed");
  }

  // Close sidebar on navigation (mobile only)
  document.querySelectorAll(".nav-button, .sidebar-link").forEach(btn => {
    btn.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        closeSidebar();
      }
    });
  });
}

async function handleHashChange() {
  const hash = window.location.hash.slice(1); // Remove #
  const [view, paramString] = hash.split("?");
  const params = new URLSearchParams(paramString);

  if (view === "dashboard") {
    switchView("dashboard");
  } else if (view === "reader") {
    const path = params.get("path");
    if (path) {
      // Check for special sample report path
      if (path === SAMPLE_REPORT_PATH) {
         const sampleDoc = {
          id: "sample-report",
          label: "示例学习报告",
          description: "由评分脚本生成的 Markdown 报告",
          path: SAMPLE_REPORT_PATH,
          type: "示例",
        };
        await loadDocument(sampleDoc);
      } else {
        const item = findDocByPath(path);
        if (item) {
          await loadDocument(item);
        } else {
          // Fallback or error? defaulting to overview
          await loadDocument(COURSE_DOCS.overview[0]);
        }
      }
      switchView("reader");
      highlightSidebarItem(path);
    } else {
      // Default reader view
      switchView("reader");
    }
  } else if (view === "quiz") {
    const path = params.get("path");
    switchView("quiz");
    if (path) {
      quizSelector.value = path;
      await loadQuiz(path);
    }
  } else {
    // Default fallback
    switchView("dashboard");
  }
}

function buildSidebar() {
  renderSidebarGroup(sidebarOverview, COURSE_DOCS.overview);
  renderSidebarGroup(sidebarModules, COURSE_DOCS.modules);
  renderSidebarGroup(sidebarWeeks, COURSE_DOCS.weeks);
  renderSidebarGroup(sidebarTooling, COURSE_DOCS.tooling);

  sidebarQuizzes.innerHTML = "";
  for (const quiz of QUIZ_FILES) {
    const button = document.createElement("button");
    button.className = "sidebar-link";
    button.textContent = quiz.label;
    button.addEventListener("click", () => {
      window.location.hash = `#quiz?path=${encodeURIComponent(quiz.path)}`;
    });
    sidebarQuizzes.appendChild(button);
  }
}

function renderSidebarGroup(container, items) {
  container.innerHTML = "";
  for (const item of items) {
    const button = document.createElement("button");
    button.className = "sidebar-link";
    button.innerHTML = `<span>${escapeHtml(item.label)}</span><small>${escapeHtml(item.description)}</small>`;
    button.addEventListener("click", () => {
      window.location.hash = `#reader?path=${encodeURIComponent(item.path)}`;
    });
    button.dataset.path = item.path;
    container.appendChild(button);
  }
}

function buildQuickLinks() {
  const featured = [
    COURSE_DOCS.overview[1],
    COURSE_DOCS.weeks[0],
    COURSE_DOCS.modules[0],
    COURSE_DOCS.modules[3],
    COURSE_DOCS.tooling[0],
  ];
  quickLinks.innerHTML = "";
  for (const item of featured) {
    const button = document.createElement("button");
    button.className = "chip";
    button.textContent = item.label;
    button.addEventListener("click", () => {
      window.location.hash = `#reader?path=${encodeURIComponent(item.path)}`;
    });
    quickLinks.appendChild(button);
  }
}

function bindTopLevelActions() {
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.hash = `#${button.dataset.view}`;
    });
  });

  document.querySelector("#openReadmeButton").addEventListener("click", () => {
    window.location.hash = `#reader?path=${encodeURIComponent(COURSE_DOCS.overview[0].path)}`;
  });

  document.querySelector("#loadSampleReportButton").addEventListener("click", () => {
    window.location.hash = `#reader?path=${encodeURIComponent(SAMPLE_REPORT_PATH)}`;
  });

  document.querySelector("#renderQuizButton").addEventListener("click", () => {
    window.location.hash = `#quiz?path=${encodeURIComponent(quizSelector.value)}`;
  });

  document.querySelector("#loadSampleSubmissionButton").addEventListener("click", async () => {
    // If not currently in a quiz, maybe warn? Or just let it fail silently as before?
    // We can rely on current logic: if no currentQuizData, load from selector.
    if (!state.currentQuizData) {
       // This implies we should be in a quiz view.
       // Let's just run logic. It doesn't need a route change if we are already here.
       await loadQuiz(quizSelector.value);
    }
    if (!state.sampleSubmission) return;
    applySubmissionToForm(state.sampleSubmission.answers || {});
  });

  document.querySelector("#exportSubmissionButton").addEventListener("click", () => {
    if (!state.currentQuizData) return;
    const payload = buildSubmissionPayload();
    downloadFile(`${state.currentQuizData.quiz_id}-submission.json`, JSON.stringify(payload, null, 2), "application/json");
  });

  document.querySelector("#gradeQuizButton").addEventListener("click", () => {
    if (!state.currentQuizData) return;
    const result = scoreInBrowser();
    renderQuizResult(result);
  });

  document.querySelector("#resetQuizButton").addEventListener("click", () => {
    if (state.currentQuizData) {
      renderQuizForm(state.currentQuizData);
      quizResult.classList.add("hidden");
    }
  });

  readerContent.addEventListener("click", (event) => {
    const target = event.target.closest("[data-doc-path]");
    if (!target) return;
    event.preventDefault();
    const path = target.dataset.docPath;
    window.location.hash = `#reader?path=${encodeURIComponent(path)}`;
  });
}

function switchView(viewName) {
  state.currentView = viewName;
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === `${viewName}View`);
  });
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
  pageTitle.textContent = viewName === "dashboard" ? "课程首页" : viewName === "reader" ? "文档阅读" : "在线做题";
  
  // Close sidebar on mobile when view switches (double safety)
  if (window.innerWidth <= 900) {
    sidebar.classList.remove("open");
  }
}

async function loadDocument(item) {
  state.currentDoc = item;
  try {
      const content = await fetchText(item.path);
      readerTitle.textContent = `${item.label} · ${item.description}`;
      rawFileLink.href = item.path;
      rawFileLink.classList.remove("hidden");
      readerContent.classList.remove("empty-state");
      readerContent.innerHTML = renderMarkdown(content, item.path);
  } catch(e) {
      readerContent.innerHTML = `<p>Error loading document: ${escapeHtml(item.path)}</p>`;
  }
}

async function loadQuiz(path) {
  try {
      const quiz = await fetchJson(path);
      state.currentQuiz = path;
      state.currentQuizData = quiz;
      renderQuizForm(quiz);
      // Ensure view is active (if called directly)
      document.querySelector("#quizView").classList.add("active");
  } catch(e) {
      quizIntro.innerHTML = `<p>Error loading quiz: ${escapeHtml(path)}</p>`;
  }
}

function renderQuizForm(quiz) {
  quizIntro.innerHTML = `
    <h3>${escapeHtml(quiz.title)}</h3>
    <p>${escapeHtml(quiz.description)} 当前达标线：${quiz.passing_percent}%</p>
  `;
  quizIntro.classList.remove("hidden");
  quizForm.innerHTML = "";
  quizActions.classList.remove("hidden");
  quizResult.classList.add("hidden");
  quizResult.innerHTML = "";

  for (const question of quiz.questions) {
    const card = document.createElement("section");
    card.className = "quiz-question";
    card.dataset.questionId = question.id;

    const tags = question.tags.map((tag) => `<span class="badge">${escapeHtml(tag)}</span>`).join("");
    card.innerHTML = `
      <h4>${escapeHtml(question.id)} · ${escapeHtml(question.prompt)}</h4>
      <div class="question-meta">
        <span class="badge">${escapeHtml(question.type)}</span>
        <span class="badge">${escapeHtml(question.difficulty)}</span>
        <span class="badge">${question.score} 分</span>
        ${tags}
      </div>
    `;

    const fieldContainer = document.createElement("div");
    if (question.type === "single_choice" || question.type === "true_false") {
      fieldContainer.className = "quiz-options";
      for (const option of question.options) {
        const label = document.createElement("label");
        label.className = "quiz-option";
        label.innerHTML = `
          <input type="radio" name="${question.id}" value="${escapeHtml(option.key)}" />
          <span><strong>${escapeHtml(option.key)}</strong> ${escapeHtml(option.text)}</span>
        `;
        fieldContainer.appendChild(label);
      }
    } else {
      const textarea = document.createElement("textarea");
      textarea.className = "quiz-textarea";
      textarea.name = question.id;
      textarea.placeholder = "在这里输入你的回答。";
      fieldContainer.appendChild(textarea);
    }
    card.appendChild(fieldContainer);
    quizForm.appendChild(card);
  }
}

function buildSubmissionPayload() {
  const answers = {};
  if (!state.currentQuizData) return { answers };

  for (const question of state.currentQuizData.questions) {
    if (question.type === "single_choice") {
      const checked = quizForm.querySelector(`input[name="${CSS.escape(question.id)}"]:checked`);
      if (checked) answers[question.id] = checked.value;
    } else if (question.type === "true_false") {
      const checked = quizForm.querySelector(`input[name="${CSS.escape(question.id)}"]:checked`);
      if (checked) answers[question.id] = checked.value === "T";
    } else {
      const text = quizForm.querySelector(`[name="${CSS.escape(question.id)}"]`)?.value?.trim();
      if (text) answers[question.id] = text;
    }
  }

  return {
    student_name: "网页学员",
    quiz_file: state.currentQuiz,
    answers,
  };
}

function applySubmissionToForm(answers) {
  if (!state.currentQuizData) return;
  for (const question of state.currentQuizData.questions) {
    const value = answers[question.id];
    if (question.type === "single_choice") {
      const input = quizForm.querySelector(`input[name="${CSS.escape(question.id)}"][value="${CSS.escape(String(value || ""))}"]`);
      if (input) input.checked = true;
    } else if (question.type === "true_false") {
      const key = value === true ? "T" : value === false ? "F" : null;
      const input = key ? quizForm.querySelector(`input[name="${CSS.escape(question.id)}"][value="${key}"]`) : null;
      if (input) input.checked = true;
    } else {
      const textarea = quizForm.querySelector(`[name="${CSS.escape(question.id)}"]`);
      if (textarea && typeof value === "string") textarea.value = value;
    }
  }
}

function scoreInBrowser() {
  const submission = buildSubmissionPayload();
  const weakTagCounter = new Map();
  const results = [];
  let objectivePossible = 0;
  let objectiveEarned = 0;
  let manualPossible = 0;
  let manualEarned = 0;
  let objectiveCorrect = 0;
  let objectiveTotal = 0;

  for (const question of state.currentQuizData.questions) {
    const submitted = submission.answers[question.id];
    if (question.type === "single_choice" || question.type === "true_false") {
      objectivePossible += question.score;
      objectiveTotal += 1;
      const expected = question.answer;
      const normalized = question.type === "single_choice" ? String(submitted || "").toUpperCase() : submitted;
      const correct = normalized === expected;
      const earned = correct ? question.score : 0;
      if (correct) objectiveCorrect += 1;
      else countWeakTags(weakTagCounter, question.tags);
      results.push({
        question,
        submitted,
        earned,
        status: correct ? "correct" : "incorrect",
      });
      objectiveEarned += earned;
    } else {
      manualPossible += question.score;
      const selfInput = quizResult.querySelector(`[data-self-score="${CSS.escape(question.id)}"]`);
      const selfScore = selfInput ? Number(selfInput.value) : 0;
      if (selfScore < question.score) countWeakTags(weakTagCounter, question.tags);
      manualEarned += Number.isFinite(selfScore) ? selfScore : 0;
      results.push({
        question,
        submitted,
        earned: Number.isFinite(selfScore) ? selfScore : 0,
        status: "subjective",
      });
    }
  }

  const totalPossible = objectivePossible + manualPossible;
  const totalEarned = objectiveEarned + manualEarned;
  const percent = totalPossible > 0 ? Number(((totalEarned / totalPossible) * 100).toFixed(2)) : 0;
  const thresholdStatus = percent >= state.currentQuizData.passing_percent ? "pass" : "fail";

  return {
    submission,
    results,
    objectivePossible,
    objectiveEarned,
    manualPossible,
    manualEarned,
    totalPossible,
    totalEarned,
    percent,
    thresholdStatus,
    objectiveCorrect,
    objectiveTotal,
    weakTags: Array.from(weakTagCounter.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([tag, count]) => ({ tag, count })),
  };
}

function renderQuizResult(result) {
  quizResult.classList.remove("hidden");
  const objectiveFeedback = result.results
    .filter((item) => item.question.type === "single_choice" || item.question.type === "true_false")
    .map((item) => {
      const statusClass = item.status === "correct" ? "status-good" : "status-bad";
      const displayAnswer =
        item.question.type === "true_false"
          ? item.submitted === true
            ? "正确"
            : item.submitted === false
              ? "错误"
              : "未作答"
          : item.submitted || "未作答";
      const expected =
        item.question.type === "true_false" ? (item.question.answer ? "正确" : "错误") : item.question.answer;
      return `
        <div class="feedback-item">
          <strong>${escapeHtml(item.question.id)} <span class="${statusClass}">${item.status === "correct" ? "答对" : "答错"}</span></strong>
          <div>你的答案：${escapeHtml(displayAnswer)}</div>
          <div>标准答案：${escapeHtml(String(expected))}</div>
          <div>解释：${escapeHtml(item.question.explanation)}</div>
        </div>
      `;
    })
    .join("");

  const manualCards = result.results
    .filter((item) => item.question.type === "short_answer" || item.question.type === "scenario")
    .map((item) => {
      const reference = Array.isArray(item.question.answer)
        ? `<ul>${item.question.answer.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>`
        : `<p>${escapeHtml(String(item.question.answer))}</p>`;
      const options = Array.from({ length: item.question.score + 1 }, (_, index) => {
        const value = String(index);
        const selected = index === item.earned ? "selected" : "";
        return `<option value="${value}" ${selected}>${value} / ${item.question.score}</option>`;
      }).join("");
      return `
        <div class="manual-review-card">
          <strong>${escapeHtml(item.question.id)} · 主观题参考</strong>
          <div>你的答案：${item.submitted ? escapeHtml(String(item.submitted)) : "未作答"}</div>
          <div>参考要点：${reference}</div>
          <div>评分说明：重点看概念是否抓住、是否区分相近概念、是否有验证或边界动作。</div>
          <label>
            自评分数：
            <select class="manual-score-select" data-self-score="${escapeHtml(item.question.id)}">
              ${options}
            </select>
          </label>
        </div>
      `;
    })
    .join("");

  const reportMarkdown = buildReportMarkdown(result);
  const weaknessLines = result.weakTags.length
    ? result.weakTags
        .slice(0, 5)
        .map((item) => `<li><strong>${escapeHtml(item.tag)}</strong>：${item.count} 次。${escapeHtml(TAG_SUGGESTIONS[item.tag] || "围绕这个标签回看对应模块，并补 3 道相似题。")}</li>`)
        .join("")
    : "<li>当前没有明显薄弱标签，可继续做更高难度练习。</li>";

  quizResult.innerHTML = `
    <div class="result-summary">
      <div class="result-card">
        <span>当前总分</span>
        <strong>${result.totalEarned} / ${result.totalPossible}</strong>
      </div>
      <div class="result-card">
        <span>得分率</span>
        <strong>${result.percent}%</strong>
      </div>
      <div class="result-card">
        <span>客观题</span>
        <strong>${result.objectiveEarned} / ${result.objectivePossible}</strong>
      </div>
      <div class="result-card">
        <span>是否达标</span>
        <strong class="${result.thresholdStatus === "pass" ? "status-good" : "status-bad"}">${result.thresholdStatus === "pass" ? "达到 80 分" : "未达 80 分"}</strong>
      </div>
    </div>

    <div class="result-columns">
      <div class="feedback-list">
        <h3>客观题反馈</h3>
        ${objectiveFeedback || "<p>当前题库没有客观题。</p>"}
      </div>
      <div class="feedback-list">
        <h3>薄弱点与补练建议</h3>
        <ul>${weaknessLines}</ul>
      </div>
    </div>

    <div class="manual-review-grid">
      <div class="feedback-list">
        <h3>主观题自评</h3>
        <p>主观题无法完全自动判定。你可以结合参考要点自评，页面会实时更新总分。</p>
        ${manualCards || "<p>当前题库没有主观题。</p>"}
      </div>
      <div class="report-box">
        <h3>报告预览</h3>
        <pre id="reportPreview">${escapeHtml(reportMarkdown)}</pre>
        <div class="quiz-actions">
          <button id="refreshReportButton" type="button" class="ghost-button">刷新总分与报告</button>
          <button id="downloadReportButton" type="button" class="primary-button">下载报告 Markdown</button>
        </div>
      </div>
    </div>
  `;

  quizResult.querySelectorAll("[data-self-score]").forEach((select) => {
    select.addEventListener("change", () => {
      const refreshed = scoreInBrowser();
      renderQuizResult(refreshed);
    });
  });

  quizResult.querySelector("#refreshReportButton").addEventListener("click", () => {
    const refreshed = scoreInBrowser();
    renderQuizResult(refreshed);
  });

  quizResult.querySelector("#downloadReportButton").addEventListener("click", () => {
    const refreshed = scoreInBrowser();
    downloadFile(
      `${state.currentQuizData.quiz_id}-progress-report.md`,
      buildReportMarkdown(refreshed),
      "text/markdown",
    );
  });
}

function buildReportMarkdown(result) {
  const weakTags = result.weakTags.slice(0, 5);
  const weakLines = weakTags.length
    ? weakTags.map((item) => `- \`${item.tag}\`：出现 ${item.count} 次`).join("\n")
    : "- 暂无明显薄弱标签";
  const suggestionLines = weakTags.length
    ? weakTags
        .map((item) => `- \`${item.tag}\`：${TAG_SUGGESTIONS[item.tag] || "围绕该标签回看对应模块，并补 3 道相似题。"}`)
        .join("\n")
    : "- 继续保持当前节奏，并把注意力放到更高难度题目。";
  return `# 学习进度报告

## 基本信息

- 学员：网页学员
- 测验：${state.currentQuizData.title}

## 成绩概览

- 总分：${result.totalEarned} / ${result.totalPossible}
- 客观题得分：${result.objectiveEarned} / ${result.objectivePossible}
- 主观题当前自评：${result.manualEarned} / ${result.manualPossible}
- 当前得分率：${result.percent}%
- 达标线：${state.currentQuizData.passing_percent}%
- 是否达到 80 分：${result.thresholdStatus === "pass" ? "是" : "否"}

## 薄弱点

${weakLines}

## 补练建议

${suggestionLines}

## 下一步动作

- 把错题最多的 2 个标签各补 3 道相似题。
- 用模板中的回炉提示词再做一次错题分析。
- 把本次最常见错误写进你的个人检查清单。
`;
}

function populateQuizSelector() {
  quizSelector.innerHTML = QUIZ_FILES.map(
    (quiz) => `<option value="${quiz.path}">${escapeHtml(quiz.label)}</option>`,
  ).join("");
}

function highlightSidebarItem(path) {
  document.querySelectorAll(".sidebar-link").forEach((button) => {
    button.classList.toggle("active", path ? button.dataset.path === path : false);
  });
}

function findDocByPath(path) {
  return Object.values(COURSE_DOCS).flat().find((item) => normalizePath(item.path) === normalizePath(path)) || null;
}

function normalizePath(path) {
  return path.replace(/\\/g, "/").replace(/\/+/g, "/");
}

function countWeakTags(counter, tags) {
  for (const tag of tags) {
    counter.set(tag, (counter.get(tag) || 0) + 1);
  }
}

async function fetchText(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Unable to load ${path}`);
  return response.text();
}

async function fetchJson(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Unable to load ${path}`);
  return response.json();
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderMarkdown(markdown, basePath) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const html = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const fence = line.slice(3).trim();
      const codeLines = [];
      index += 1;
      while (index < lines.length && !lines[index].startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }
      index += 1;
      html.push(`<pre><code class="${escapeHtml(fence)}">${escapeHtml(codeLines.join("\n"))}</code></pre>`);
      continue;
    }

    if ((line.startsWith("|") || line.includes("|")) && index + 1 < lines.length && /^\|?[\s:-|]+\|?$/.test(lines[index + 1].trim())) {
      const tableLines = [line, lines[index + 1]];
      index += 2;
      while (index < lines.length && lines[index].includes("|") && lines[index].trim()) {
        tableLines.push(lines[index]);
        index += 1;
      }
      html.push(renderTable(tableLines, basePath));
      continue;
    }

    if (/^#{1,4}\s+/.test(line)) {
      const level = line.match(/^#+/)[0].length;
      const text = line.replace(/^#{1,4}\s+/, "");
      html.push(`<h${level}>${renderInline(text, basePath)}</h${level}>`);
      index += 1;
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quoteLines = [];
      while (index < lines.length && /^>\s?/.test(lines[index])) {
        quoteLines.push(lines[index].replace(/^>\s?/, ""));
        index += 1;
      }
      html.push(`<blockquote>${quoteLines.map((item) => renderInline(item, basePath)).join("<br />")}</blockquote>`);
      continue;
    }

    if (/^(-|\*)\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^(-|\*)\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^(-|\*)\s+/, ""));
        index += 1;
      }
      html.push(`<ul>${items.map((item) => `<li>${renderInline(item, basePath)}</li>`).join("")}</ul>`);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      html.push(`<ol>${items.map((item) => `<li>${renderInline(item, basePath)}</li>`).join("")}</ol>`);
      continue;
    }

    const paragraphLines = [line];
    index += 1;
    while (index < lines.length && lines[index].trim() && !isBlockStarter(lines[index])) {
      paragraphLines.push(lines[index]);
      index += 1;
    }
    html.push(`<p>${renderInline(paragraphLines.join(" "), basePath)}</p>`);
  }

  return html.join("");
}

function isBlockStarter(line) {
  return (
    line.startsWith("```") ||
    /^#{1,4}\s+/.test(line) ||
    /^>\s?/.test(line) ||
    /^(-|\*)\s+/.test(line) ||
    /^\d+\.\s+/.test(line) ||
    line.includes("|")
  );
}

function renderTable(tableLines, basePath) {
  const rows = tableLines.map((line) =>
    line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim()),
  );
  const [header, separator, ...bodyRows] = rows;
  return `
    <table>
      <thead>
        <tr>${header.map((cell) => `<th>${renderInline(cell, basePath)}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${bodyRows
          .map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell, basePath)}</td>`).join("")}</tr>`)
          .join("")}
      </tbody>
    </table>
  `;
}

function renderInline(text, basePath) {
  let output = escapeHtml(text);
  output = output.replace(/`([^`]+)`/g, (_, code) => `<code>${escapeHtml(code)}</code>`);
  output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, target) => {
    const resolved = resolvePath(basePath, target);
    if (resolved.endsWith(".md")) {
      return `<a href="#" data-doc-path="${escapeHtml(resolved)}">${escapeHtml(label)}</a>`;
    }
    return `<a href="${escapeHtml(target)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`;
  });
  return output;
}

function resolvePath(basePath, relativePath) {
  const base = new URL(basePath, window.location.href);
  return new URL(relativePath, base).pathname.replace(/^\//, "../");
}

function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
