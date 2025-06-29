---
title: "Structurally Prune Anything: Any Architecture, Any Framework, Any Time"
collection: publications
permalink: /publication/SPA
#excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
date: 2024-03-04
venue: 'arxiv'
pageurl: '../SPA.html'
paperurl: 'https://arxiv.org/pdf/2403.18955'
link: '../SPA.html'
#citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
#
---

<!-- Neural network pruning serves as a critical technique for enhancing the efficiency of deep learning models. Unlike unstructured pruning, which only sets specific parameters to zero, structured pruning eliminates entire channels, thus yielding direct computational and storage benefits. However, the diverse patterns for coupling parameters, such as residual connections and group convolutions, the diverse deep learning frameworks, and the various time stages at which pruning can be performed make existing pruning methods less adaptable to different architectures, frameworks, and pruning criteria. To address this, we introduce Structurally Prune Anything (SPA), a versatile structured pruning framework that can prune neural networks with any architecture, from any framework, and at any stage of training. SPA leverages a standardized computational graph and ONNX representation to prune diverse neural network architectures without the need for manual intervention. SPA employs a group-level importance estimation method, which groups dependent computational operators, estimates their importance, and prunes unimportant coupled channels. This enables the transfer of various existing pruning criteria into a structured group style. As a result, SPA supports pruning at any time, either before training, after training with fine-tuning, or after training without fine-tuning. In the context of the latter, we introduce Optimal Brain SPA (OBSPA), an algorithm that achieves state-of-the-art pruning results needing neither fine-tuning nor calibration data. In extensive experiments, SPA shows competitive to state-of-the-art pruning performance across various architectures, from popular frameworks, at different pruning times. -->
