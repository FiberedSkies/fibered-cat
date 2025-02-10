# resources
This is where I'll post any links to resources I find really good or interesting! ❤️

#### What am I reading right now?

 - [ROSS: A High-Performance, Low Memory, Modular Time Warp System](https://dl.acm.org/doi/pdf/10.5555/336146.336157)
 - [The Local Time Warp Approach](https://dl.acm.org/doi/pdf/10.1145/174134.158474)
 - [Grobner Bases: A Computaional Approach to Commutative Algebra](https://link.springer.com/book/10.1007/978-1-4612-0913-3)

---

## Simulators & Automata

I really really love the classic simulator papers from the 70s through late 90s, they still are extremely relevant imho today. It honestly feels like they had all the right directions wand ideas but nowhere near enough compute to explore it properly like now, so there's a lot to be taken and built upon still from then. Some of my favorites are:

 - [Hashed and Hierarchical Timing Wheels: Data Structuresfor the Efficient Implementation of a Timer Facility](https://dl.acm.org/doi/pdf/10.1145/37499.37504)
 - [Virtual Time](https://dl.acm.org/doi/pdf/10.1145/3916.3988)
 - [Asynchronous Distributed Simulation via a Sequence of Parallel Computations](https://dl.acm.org/doi/pdf/10.1145/358598.358613)
 - [Parallel Discrete Event Simulations](https://dl.acm.org/doi/pdf/10.1145/84537.84545)
 - [HERCULES: A System for High Level Synthesis](https://si2.epfl.ch/demichel/publications/archive/1988/DAC88pg483.pdf)

 - [Time Warp Simulation on Multi-Core Platforms](https://www.informs-sim.org/wsc19papers/150.pdf)
 - [A Study of Time Warp Rollback Mechanisms](https://dl.acm.org/doi/pdf/10.1145/102810.102813)
 - [An evaluation of the Chandy-Misra-Bryant algorithm for digital logic simulation](https://dl.acm.org/doi/pdf/10.1145/130611.130613)

There's likely a ton more recent work, but I'm still working through the classics I supposed. Lots to try out on new hardware.

## Machine Learning

Most of what I focus on in ML theory is either reinforcement learning, model efficiency, or geometric learning. Mainly curious about how I can make smarter and more capable automated systems using ML, and how algebraic methods can be used to improve different models.

##### Reinforcement Learning

If you're just starting out with RL, I'd recommend checking out this textbook: [Reinforcement Learning: An Introduction](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

For deep RL methods:

 - [Compatible Gradient Approximations for Actor-Critic Algorithms](https://arxiv.org/abs/2409.01477)
 - [The Definitive Guide to Policy Gradients in Deep Reinforcement Learning](https://arxiv.org/abs/2401.13662)
 - [An Invitation to Deep Reinforcement Learning](https://arxiv.org/abs/2312.08365)

For partially observed and sparse reward enviroments:

 - [SOAP-RL: Sequential Option Advantage Propagation for Reinforcement Learning in POMDP Environments](https://arxiv.org/abs/2407.18913)
 - [Beyond Optimism: Exploration With Partially Observable Rewards](https://arxiv.org/abs/2406.13909)
 - [Reinforcement Learning with Sparse Rewards using Guidance from Offline Demonstration](https://arxiv.org/abs/2202.04628)
 - [When is Partially Observable Reinforcement Learning Not Scary?](https://arxiv.org/abs/2204.08967)
 - [Planning and acting in partially observable stochastic domains](https://people.csail.mit.edu/lpk/papers/aij98-pomdp.pdf)

For on-policy approximate methods:

 - [DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](https://arxiv.org/abs/2402.03300)
 - [KTO: Model Alignment as Prospect Theoretic Optimization](https://arxiv.org/abs/2402.01306)
 - [Reward Model Learning vs. Direct Policy Optimization: A Comparative Analysis of Learning from Human Preferences](https://arxiv.org/abs/2403.01857)
 - [Direct Preference Optimization: Your Language Model is Secretly a Reward Model](https://arxiv.org/abs/2305.18290)
 - [Partial Advantage Estimator For Proximal Policy Optimization](https://arxiv.org/abs/2301.10920)
 - [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347)
 - [Trust Region Policy Optimization](https://arxiv.org/abs/1502.05477)

For off-policy approximate methods:

 - [Vlearn: Off-Policy Learning with Efficient State-Value Function Estimation](https://arxiv.org/html/2403.04453v2)
 - [V-trace](https://paperswithcode.com/method/v-trace)
 - [Skill or Luck? Return Decomposition via Advantage Functions](https://arxiv.org/abs/2402.12874)
 - [Direct Advantage Estimation](https://arxiv.org/abs/2109.06093)

##### Symmetries and Model Efficiency

I've been really curious about the balance between model efficiency, convergence, and generalization, and how this can help us improve model design in general. There isn't exactly one start point for this if you'd like to dive in, but "The Lottery Ticket Hypothesis" provides good context before diving into how symmetries may be used to balance out some of the pain points of network pruning.

 - [On the Ability of Deep Networks to Learn Symmetries from Data: A Neural Kernel Theory](https://arxiv.org/html/2412.11521v1)
 - [Improving Convergence and Generalization using Parameter Symmetries](https://openreview.net/pdf?id=L0r0GphlIL)
 - [Pruning's Effect on Generalization Through the Lens of Training and Regularization](https://arxiv.org/abs/2210.13738)
 - [On Symmetries of Deep Learning Models and their Internal Representations](https://arxiv.org/abs/2205.14258)
 - [Incorporating Symmetry into Deep Dynamics Models for Improved Generalization](https://arxiv.org/abs/2002.03061)
 - [Symmetry Teleportation for Accelerated Optimization](https://arxiv.org/abs/2205.10637)
 - [Rigging the Lottery: Making All Tickets Winners](https://arxiv.org/abs/1911.11134)
 - [The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks](https://arxiv.org/pdf/1803.03635)

##### Geometric Learning

This is a bit broad, but basically everything in here relates to models informed of, or defined around, concepts from AT or AG.

 - [Topos and Stacks of Deep Neural Networks](https://arxiv.org/abs/2106.14587)
 - [ReLU Neural Networks, Polyhedral Decompositions, and Persistent Homology](https://arxiv.org/abs/2306.17418)
 - [Neural Sheaf Diffusion: A Topological Perspective on Heterophily and Oversmoothing in GNNs](https://arxiv.org/abs/2202.04579)
 - [Simplicial Attention Networks](https://arxiv.org/abs/2204.09455)
 - [Sheaf Neural Networks with Connection Laplacians](https://proceedings.mlr.press/v196/barbero22a/barbero22a.pdf)
 - [Topological Deep Learning: Classification Neural Networks](https://arxiv.org/abs/2102.08354)

##### Language Models and Scaling

I'm not very strong with LLMs but I try to keep up with the liturature

 - [Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer](https://arxiv.org/abs/1701.06538)
 - [Hyena Hierarchy: Towards Larger Convolutional Language Models](https://arxiv.org/abs/2302.10866)
 - [FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness](https://arxiv.org/abs/2205.14135)
 - [Fast Transformer Decoding: One Write-Head is All You Need](https://arxiv.org/abs/1911.02150)
 - [RoFormer: Enhanced Transformer with Rotary Position Embedding](https://arxiv.org/abs/2104.09864)
 - [Model Agnostic Meta-Learning for Fast Adaptation of Deep Networks](https://arxiv.org/abs/1703.03400)

## Computational & Applied Math

TODO! I have far too many applied math resources to index right now, so will get back to this slowly this week.

 - [Using Algebraic Geometry](https://eclass.uoa.gr/modules/document/file.php/D231/Papers/Cox-UsingAlgebraicGeometry.pdf)
 - [Artin's deformation theory notes](https://www.maths.ed.ac.uk/~ssierra/artin_notes_deformationthy.pdf)
