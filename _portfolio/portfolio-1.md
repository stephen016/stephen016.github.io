---
title: "Structurally Prune Anything (SPA)"
excerpt: "A universal structured pruning framework for neural networks that works across any architecture, framework, and training stage<br/><img src='/projects/SPA/System_overview.png'>"
collection: portfolio
---

## Structurally Prune Anything (SPA)

**A Universal Neural Network Pruning Framework**

### Overview
SPA is a groundbreaking structured pruning framework that addresses the limitations of existing pruning methods by providing universal compatibility across neural network architectures, deep learning frameworks, and training stages.

### Key Features
- **Universal Compatibility**: Works with any neural network architecture (CNNs, Transformers, ResNets, etc.)
- **Framework Agnostic**: Compatible with PyTorch, TensorFlow, JAX, and other frameworks
- **Flexible Timing**: Supports pre-training, post-training, and fine-tuning scenarios
- **ONNX Integration**: Leverages standardized computational graphs for seamless operation

### Technical Innovation
- **Group-Level Importance Estimation**: Novel algorithm for identifying and grouping dependent computational operators
- **Optimal Brain SPA (OBSPA)**: State-of-the-art post-training pruning without requiring fine-tuning or calibration data
- **Automated Pipeline**: No manual intervention required for different architectures

### Results
- Competitive performance across diverse architectures (ResNet, VGG, Transformer models)
- Significant computational savings (up to 80% parameter reduction)
- Maintained accuracy across different pruning ratios

[**Paper**](https://arxiv.org/pdf/2403.18955) | [**Project Page**](../SPA.html) 
