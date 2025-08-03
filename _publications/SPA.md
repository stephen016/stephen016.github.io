---
title: "Structurally Prune Anything: Any Architecture, Any Framework, Any Time"
collection: publications
permalink: /publication/SPA
excerpt: 'A versatile structured pruning framework that works across any neural network architecture, framework, and training stage, introducing OBSPA for post-training pruning without fine-tuning.'
date: 2024-03-04
venue: 'arXiv preprint'
pageurl: '../SPA.html'
paperurl: 'https://arxiv.org/pdf/2403.18955'
citation: 'Wang, X., et al. (2024). "Structurally Prune Anything: Any Architecture, Any Framework, Any Time." arXiv preprint arXiv:2403.18955.'
---

## Abstract

Neural network pruning serves as a critical technique for enhancing the efficiency of deep learning models. Unlike unstructured pruning, which only sets specific parameters to zero, structured pruning eliminates entire channels, thus yielding direct computational and storage benefits. However, the diverse patterns for coupling parameters, such as residual connections and group convolutions, the diverse deep learning frameworks, and the various time stages at which pruning can be performed make existing pruning methods less adaptable to different architectures, frameworks, and pruning criteria.

To address this, we introduce **Structurally Prune Anything (SPA)**, a versatile structured pruning framework that can prune neural networks with any architecture, from any framework, and at any stage of training. SPA leverages a standardized computational graph and ONNX representation to prune diverse neural network architectures without the need for manual intervention.

## Key Contributions

- **Universal Framework**: SPA works across any neural network architecture and deep learning framework
- **Group-Level Importance Estimation**: Groups dependent computational operators and estimates their importance for structured pruning
- **Flexible Timing**: Supports pruning at any stage - before training, after training with fine-tuning, or after training without fine-tuning
- **OBSPA Algorithm**: Introduces Optimal Brain SPA for state-of-the-art post-training pruning results without requiring fine-tuning or calibration data

## Impact

This work addresses a fundamental challenge in neural network compression by providing the first truly universal structured pruning solution. The framework's ability to work across different architectures and frameworks without manual intervention makes it highly practical for real-world deployment scenarios.
