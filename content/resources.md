# resource dump
This is where I'll post any links to resources I find really good, useful, or interesting! <3

## Simulators

I really really love the classic simulator papers from the 70s through late 90s, they still are extremely relevant today imho. It honestly feels like they had all the right directions wand ideas but nowhere near enough compute to explore it properly like now, so there's a lot to be taken and built upon still from then.

 - [Hashed and Hierarchical Timing Wheels: Data Structures for the Efficient Implementation of a Timer Facility](https://dl.acm.org/doi/pdf/10.1145/37499.37504)
 - [Virtual Time](https://dl.acm.org/doi/pdf/10.1145/3916.3988)
 - [Asynchronous Distributed Simulation via a Sequence of Parallel Computations](https://dl.acm.org/doi/pdf/10.1145/358598.358613)
 - [Parallel Discrete Event Simulations](https://dl.acm.org/doi/pdf/10.1145/84537.84545)
 - [A Study of Time Warp Rollback Mechanisms](https://dl.acm.org/doi/pdf/10.1145/102810.102813)
 - [An evaluation of the Chandy-Misra-Bryant algorithm for digital logic simulation](https://dl.acm.org/doi/pdf/10.1145/130611.130613)

## Machine Learning

Most of what I focus on in ML theory is either reinforcement learning, model efficiency, or topological learning. Mainly curious about how I can make smarter and more capable automated systems using DRL and reasoning, along how algebraic methods can be used to improve these models.

##### Reinforcement Learning

If you're just starting out with RL, I'd recommend checking out this textbook: [Reinforcement Learning: An Introduction](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf). The following links are just papers I have found useful in my work so far. 

For deep RL methods:

 - [Compatible Gradient Approximations for Actor-Critic Algorithms](https://arxiv.org/abs/2409.01477)
 - [The Definitive Guide to Policy Gradients in Deep Reinforcement Learning](https://arxiv.org/abs/2401.13662)
 - [An Invitation to Deep Reinforcement Learning](https://arxiv.org/abs/2312.08365)

For partially observed and sparse reward enviroments:

 - [Beyond Optimism: Exploration With Partially Observable Rewards](https://arxiv.org/abs/2406.13909)
 - [Reinforcement Learning with Sparse Rewards using Guidance from Offline Demonstration](https://arxiv.org/abs/2202.04628)
 - [When is Partially Observable Reinforcement Learning Not Scary?](https://arxiv.org/abs/2204.08967)

For on-policy approximate methods:

 - [DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](https://arxiv.org/abs/2402.03300)
 - [KTO: Model Alignment as Prospect Theoretic Optimization](https://arxiv.org/abs/2402.01306)
 - [Direct Preference Optimization: Your Language Model is Secretly a Reward Model](https://arxiv.org/abs/2305.18290)
 - [Partial Advantage Estimator For Proximal Policy Optimization](https://arxiv.org/abs/2301.10920)
 - [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347)
 - [Trust Region Policy Optimization](https://arxiv.org/abs/1502.05477)

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

##### Topological Learning

 - [Topos and Stacks of Deep Neural Networks](https://arxiv.org/abs/2106.14587)
 - [ReLU Neural Networks, Polyhedral Decompositions, and Persistent Homology](https://arxiv.org/abs/2306.17418)
 - [Neural Sheaf Diffusion: A Topological Perspective on Heterophily and Oversmoothing in GNNs](https://arxiv.org/abs/2202.04579)
 - [Simplicial Attention Networks](https://arxiv.org/abs/2204.09455)
 - [Sheaf Neural Networks with Connection Laplacians](https://proceedings.mlr.press/v196/barbero22a/barbero22a.pdf)
 - [Topological Deep Learning: Classification Neural Networks](https://arxiv.org/abs/2102.08354)


## Computational & Applied Math

In applied math, my interest the past year has been exclusively on emergence and stability in complex systems, and have particularly been taking an approach through geometry. These are some of the resources I've either used or encountered in this exploration.

##### Papers

Some of the foundational works:

 - [Sheaves, Cosheaves and Applications](https://arxiv.org/abs/1303.3255)
 - [Towards A Spectral Theory of Cellular Sheaves](https://arxiv.org/abs/1808.01513)
 - [Cellular Sheaves of Lattices and the Tarski Laplacian](https://arxiv.org/abs/2007.04099)
 - [Higher-order Laplacian Renormalization](https://arxiv.org/abs/2401.11298)
 - [Persistence by Parts: Multiscale Feature Detection via Distributed Persistent Homology](https://arxiv.org/abs/2001.01623)
 - [Connecting the geometry and dynamics of many-body complex systems with message passing neural operators](https://www.arxiv.org/abs/2502.15913)

Note that these also give major context for all the sheaf neural network papers listed earlier as all of them are built off cellular sheaves over graphs. Now for some papers on applications of all this:

 - [A Sheaf-Theoretic Characterization of Tasks in Distributed Systems](https://arxiv.org/abs/2503.02556)
 - [Opinion Dynamics on Discourse Sheaves](https://arxiv.org/abs/2005.12798)
 - [SIGMA: Sheaf-Informed Geometric Multi-Agent Pathfinding](https://arxiv.org/abs/2502.06440)

##### Books

My fav books right now:

 - [Topological Signal Processing](https://link.springer.com/book/10.1007/978-3-642-36104-3)
 - [Grobner Bases: A Computational Approach to Commutative Algebra](https://link.springer.com/book/10.1007/978-1-4612-0913-3)
 - [Using Algebraic Geometry](https://link.springer.com/book/10.1007/b138611)
 - [Categories and Sheaves](https://link.springer.com/book/10.1007/3-540-27950-4)
 - [Sheaves in Geometry and Logic: An Introduction to Topos Theory](https://link.springer.com/book/10.1007/978-1-4612-0927-0)
