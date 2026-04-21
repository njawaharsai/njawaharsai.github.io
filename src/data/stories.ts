export interface StoryCard {
  id: string;
  tag: string;
  title: string;
  subtitle?: string;
  situation: string;
  decision: string;
  outcome: string;
  lesson: string;
  pills: string[];
}

export interface StoryGroup {
  role: string;
  company: string;
  duration: string;
  isCurrent: boolean;
  stories: StoryCard[];
}

export const storyGroups: StoryGroup[] = [
  {
    role: 'Founding Software Engineer',
    company: 'Encando AI',
    duration: 'Aug 2025 - Present',
    isCurrent: true,
    stories: [
      {
        id: 'ai-council',
        tag: 'AI Systems · Reliability',
        title: 'Why One AI Wasn\'t Enough to Make a Decision',
        subtitle: 'Designing reliability through deliberate disagreement',
        situation: 'Professors were using our AI grading but hesitant to trust it. The problem wasn\'t accuracy - it was <strong>unpredictable accuracy</strong>. A single LLM gives you a grade, but no honest signal about how confident it is. Professors had no way to triage which grades needed scrutiny.',
        decision: 'I built the <strong>AI Council</strong>: two independent models (GPT-5 + Gemini Pro) grade each submission with zero shared context. Their agreement score becomes the confidence signal - surfaced explicitly to professors alongside the grade itself.',
        outcome: 'Data validated the hypothesis exactly. Professors overrode <strong>7% of high-confidence grades</strong> vs. <strong>33% of low-confidence grades</strong>. Grading reliability improved <strong>30%</strong>. More importantly, professors started trusting the system - the disagreement signal earned that trust.',
        lesson: '<strong>Make AI uncertainty visible, not averaged away</strong>. Designing for disagreement is more useful than chasing a single model\'s accuracy ceiling. I\'d rather surface an honest "we\'re not sure" than give professors a confident wrong answer about someone\'s grade.',
        pills: ['Multi-agent', 'GPT-5', 'Gemini Pro', 'Confidence scoring', 'AI reliability'],
      },
      {
        id: 'latency',
        tag: 'Infrastructure · Performance',
        title: 'How We Went From 1.4 Seconds to 67ms',
        subtitle: 'A diagnostic journey, not a solutions list',
        situation: 'As Monthly Active Users (MAU) crossed 3,000, <strong>median API latency hit 1.4 seconds</strong>. The platform felt broken. Professors were complaining. I had no observability tooling, it was just CloudWatch logs, intuition, and a slow-growing list of suspects.',
        decision: 'Ruled out AI calls first (expected slow). Traced hot paths: <strong>DynamoDB was running full table scans and EC2 was a single-node bottleneck</strong>. I tackled three things in parallel: GSIs on all high-frequency access patterns, Redis cache-aside layer, and Fargate migration with private VPC networking to eliminate public internet hops.',
        outcome: '<strong>67ms median latency</strong> - a <strong>95% reduction</strong>. P95 improved 3.5×. Redis settled at ~70% cache hit rate; DynamoDB read costs dropped ~40%. The platform scaled to 6,000+ monthly active users with zero latency regression.',
        lesson: '<strong>Diagnosis before solution</strong>. Caching a bad access pattern doesn\'t fix it, it hides it. The instinct to add Redis everywhere would have been wrong. Finding the root cause gave us a permanent fix, not a band-aid.',
        pills: ['DynamoDB GSIs', 'ElastiCache Redis', 'AWS Fargate', 'VPC', 'Performance'],
      },
      {
        id: 'fifo',
        tag: 'System Design · Fairness',
        title: 'FIFO Is Almost Never the Right Answer',
        subtitle: 'Building a fair scheduler when fairness isn\'t obvious',
        situation: 'Smart Note\'s OCR pipeline started with a naive FIFO queue. The problem: <strong>users uploading 50 documents monopolized the processor</strong>. A user uploading a single file waited behind bulk jobs for minutes. Churn risk was real.',
        decision: 'Designed a <strong>fairness-weighted priority queue</strong>: each scheduling cycle checks each user\'s last 25 processed documents and the next 50 queued across all users. Slots are assigned to minimize per-user wait disparity.',
        outcome: 'Processing time for <strong>300+ concurrent jobs</strong> dropped <strong>40% vs. sequential FIFO</strong>. Individual users stopped experiencing unfair waits. No complaints about the queue, which is the best outcome.',
        lesson: '<strong>Default behaviors carry moral weight</strong>. FIFO assumes all users and requests are equivalent. Neither is true. Whenever I see a queue today, I ask: who gets hurt by the default policy? Good systems design accounts for them before they complain.',
        pills: ['Queue design', 'Redis', 'Celery', 'Fairness algorithms', 'System design'],
      },
      {
        id: 'ai-fixed-ai',
        tag: 'AI Tooling · Automation',
        title: 'I Used AI to Fix AI',
        subtitle: 'Automating the eval-analyze-iterate loop with Claude Code',
        situation: 'Improving ChaTA\'s RAG pipeline was a <strong>manual multi-day loop</strong>: run RAGAS evaluation, read results, identify underperforming query categories, manually tweak prompts or retrieval configs, re-run, compare. I was spending more time operating the loop than thinking about what to change.',
        decision: 'I turned <strong>Claude Code into an agentic eval driver</strong>. It ingests the RAGAS test dataset, current retrieval config, and active system prompt. It runs full evaluation, identifies failure categories, proposes targeted changes, applies them, re-runs, and compares score deltas - iterating until scores plateau.',
        outcome: 'What took 3-4 days of manual back-and-forth compressed into a single automated session. The agent directly contributed to the <strong>18% RAGAS accuracy improvement</strong> by running more iterations per cycle than I could manually.',
        lesson: '<strong>The eval loop is the real engineering work in AI systems</strong>. Automating it doesn\'t remove the thinking, it removes the friction, so you run it 10× more often. The system that evaluates itself well improves faster than the one that evaluates itself carefully but rarely.',
        pills: ['Claude Code', 'RAGAS', 'LangChain', 'Pinecone', 'Agentic tooling'],
      },
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Encando AI',
    duration: 'May 2025 - Jul 2025',
    isCurrent: false,
    stories: [
      {
        id: 'devops-ci-cd',
        tag: 'Devops · Culture',
        title: 'The Pipeline That Changed How the Team Shipped',
        subtitle: 'When deploying becomes safe, everything changes',
        situation: 'Before CI/CD, shipping to production meant <strong>manually pushing and watching Slack for errors</strong>. Deploys were infrequent because they were scary. The team moved slowly not because of missing features - but because of fear of breaking what already worked.',
        decision: 'I built a full GitHub Actions pipeline: tag-based deploys, OIDC-based secrets, and <strong>blue-green ECS deployment at 100%/200% task count</strong>. The non-obvious choice was blue-green over rolling - it costs more but eliminates the "half-deployed" failure window entirely.',
        outcome: 'Deployment time dropped <strong>25 minutes to under 5 minutes</strong>. The team started shipping regularly. People stopped treating deploys as events and started treating them as routine. The cultural shift was bigger than any metric.',
        lesson: '<strong>Developer confidence is a product feature</strong>. A safe deployment pipeline doesn\'t just reduce risk - it unlocks velocity. Infrastructure investment has compounding cultural returns that no ticket can measure. I now treat CI/CD as the first thing to build, not the last.',
        pills: ['GitHub Actions', 'Blue-green', 'AWS ECS', 'OIDC', 'CI/CD culture'],
      },
      {
        id: 'stripe-webhooks',
        tag: 'Payments · Reliability',
        title: 'The Webhook That Had to Be Idempotent',
        subtitle: 'Why payment systems punish optimism',
        situation: 'Stripe webhooks can be delivered <strong>multiple times on network failures</strong>. If your handler isn\'t idempotent, a subscription renewal event processed twice means double-charges or corrupted subscription state. The default assumption - that an event arrives once - is wrong by design.',
        decision: 'Implemented <strong>idempotency key handling</strong> using Stripe\'s event ID: store each processed event ID in DynamoDB, check before processing, skip if already seen. Also wired subscription state directly into the RBAC middleware, so feature access updates atomically with payment status on every API call.',
        outcome: 'Zero double-processing incidents. The webhook handler became a <strong>reliable financial contract</strong>, not a best-effort listener. Tying subscription state to RBAC meant no gap between payment status and actual access level.',
        lesson: '<strong>Payment systems punish optimism</strong>. You have to assume every external call will be retried, delayed, or duplicated. Building for the failure modes first and happy path second is what makes financial code trustworthy.',
        pills: ['Stripe API', 'Webhooks', 'Idempotency', 'RBAC', 'DynamoDB'],
      }
    ]
  },
  {
    role: 'Graduate Research Assistant',
    company: 'Encando AI',
    duration: 'May 2024 - Apr 2025',
    isCurrent: false,
    stories: [
      {
        id: 'zero-to-one',
        tag: 'Architecture · 0 → 1',
        title: 'I Inherited a Single Endpoint and a Dream',
        subtitle: 'Building a production platform from a static HTML page',
        situation: 'When I joined Encando, the entire backend was <strong>one FastAPI endpoint</strong> calling OpenAI. No database, no auth, no deployment - a static HTML page and a vision. Every architectural decision I made would become load-bearing for the next two years.',
        decision: 'Committed to <strong>React + TypeScript + DynamoDB</strong> from day one, even though simpler stacks would\'ve moved faster initially. The reasoning: 3 user roles, a complex data model, a team that would grow. Cutting corners on foundations meant paying interest on every feature forever.',
        outcome: 'Twelve months later: <strong>20K+ users</strong>, <strong>6K+ MAU</strong>, <strong>30+ pages</strong>, <strong>100+ components</strong> - all built on those early patterns. The component architecture never needed a full rewrite. Those early bets held.',
        lesson: '<strong>Foundations compound</strong>. Choosing the right defaults when no one\'s watching is harder than optimizing under pressure - because you\'re making bets without feedback loops. I now deliberately separate "which choices are reversible" from "which are load-bearing" before writing a line of code.',
        pills: ['React', 'TypeScript', 'DynamoDB', 'FastAPI', 'Auth / RBAC', '0→1'],
      },
      {
        id: 'reranker',
        tag: 'ML · RAG Pipeline',
        title: 'Teaching a Model to Rank What Matters',
        subtitle: 'Why cosine similarity alone isn\'t enough for production RAG',
        situation: 'ChaTA was retrieving chunks that were topically related but not actually helpful. <strong>Cosine similarity doesn\'t know what a student needs</strong> - it just knows what\'s geometrically close in embedding space. The LLM was getting confused by adjacent context, not the answer itself.',
        decision: 'Trained a <strong>PyTorch cross-encoder reranker</strong> using instructor preference data. Pairs of (query, chunk) rated as helpful/not helpful. Trained via a ranking loss so the model learns to reorder retrieved chunks by actual relevance - not vector proximity.',
        outcome: '<strong>nDCG improved 18%</strong>. The LLM started giving more focused answers because it was getting higher-signal context. Irrelevant context injection - the primary driver of hallucination in RAG - dropped measurably.',
        lesson: '<strong>Retrieval and generation are two distinct problems</strong>. You can\'t solve both with the same model. The reranker is the bridge: it jointly understands the query and the document, not just their vector representations. I now treat a reranker as mandatory in any production RAG system.',
        pills: ['PyTorch', 'Cross-encoder', 'Preference learning', 'Pinecone', 'RAG'],
      },
    ],
  },
  {
    role: 'Software Engineer',
    company: 'GEP Worldwide',
    duration: 'Jul 2022 - Nov 2023',
    isCurrent: false,
    stories: [
      {
        id: 'migration',
        tag: 'Data Engineering · Risk',
        title: 'Moving 150 Million Documents Without Losing Sleep',
        subtitle: 'Large-scale migration is mostly a trust problem',
        situation: '<strong>150M+ documents across fragmented SQL schemas</strong> serving Fortune 500 procurement workflows. The business wanted a unified MongoDB model. One reconciliation error on production data would be catastrophic, and there was no staging environment at equivalent data scale.',
        decision: 'Built the migration in <strong>rolling phases on Azure Databricks with PySpark</strong>, validation and reconciliation embedded at every stage. Before anything ran: one week on the pre-mortem - what are all the failure modes, what is the rollback plan, how do we verify output matches input?',
        outcome: 'Migration completed without data loss. <strong>Database load dropped 12% post-migration</strong>. The reconciliation logic caught 3 edge-case deduplication issues mid-run that would have caused silent data corruption.',
        lesson: '<strong>The pre-mortem is the real engineering work</strong>. Any competent engineer can write a PySpark job. What makes a migration safe is spending more time on "what could go wrong" than on "how to make it work."',
        pills: ['PySpark', 'Azure Databricks', 'MongoDB', 'SQL Server', 'ETL'],
      },
      {
        id: 'low-code',
        tag: 'Architecture · Ownership',
        title: 'Letting Business Teams Ship Without Engineers',
        subtitle: 'The best architecture decision I made wasn\'t about code',
        situation: 'Every new shipment feature required full engineering involvement. Business teams with domain expertise had ideas sitting in a backlog for <strong>months waiting for engineering cycles</strong>. The bottleneck was process, not capability.',
        decision: 'Designed a <strong>low-code Angular plugin architecture</strong> where business teams configure and deploy domain-specific shipment features via a structured plugin interface. Lazy-loaded modules, isolated deployments, no core app changes needed.',
        outcome: '<strong>25% reduction in engineering man-hours</strong> for shipment division features. Business teams started shipping domain-specific features independently. Engineering moved to platform-level work instead of being a bottleneck for every routine request.',
        lesson: '<strong>Ownership is an architecture decision</strong>. When you design systems that let the right people make the right decisions without a middleman, everyone moves faster. The most valuable thing I built wasn\'t a feature - it was a mechanism for features to get built without me.',
        pills: ['Angular', 'TypeScript', 'Plugin architecture', 'Lazy loading', 'Low-code'],
      },
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'GEP Worldwide',
    duration: 'May 2021 - Jul 2021',
    isCurrent: false,
    stories: [
      {
        id: 'testing',
        tag: 'Testing · Safety',
        title: 'The Codebase That Had No Safety Net',
        subtitle: 'What 52% coverage improvement taught me about trust',
        situation: 'The legacy codebase at GEP had <strong>near-zero test coverage</strong>. Every deployment was a leap of faith. Nobody knew what the safe change boundaries were because nothing was validated automatically. Engineers were cautious - not because they were bad, but because the system gave them no confidence that changes wouldn\'t ripple unexpectedly.',
        decision: 'Introduced automation testing from scratch using .NET testing frameworks, starting with the highest-risk paths: service layers, API controllers, and core business logic. I didn\'t aim for coverage percentage; I aimed for covering every behavior that would break a client if wrong.',
        outcome: '<strong>52% improvement in code coverage</strong>. The team started merging with confidence. The patterns I established were adopted for new feature development after I left. Won 1st Prize at GEP\'s all-India intern Techathon that summer.',
        lesson: '<strong>Tests are not about finding bugs - they\'re about making future change safe</strong>. Every test I wrote was a promise: "this behavior is intentional, and if you break it accidentally, you\'ll know immediately." That kind of promise is worth more than any feature I shipped that summer.',
        pills: ['.NET (xUnit)', 'Test automation', 'Code coverage', 'Legacy refactor', 'Techathon 1st Prize'],
      },
    ],
  },
];
