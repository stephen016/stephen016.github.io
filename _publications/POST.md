---
title: "Efficient and Privacy-Preserving Soft Prompt Transfer for LLMs"
collection: publications
permalink: /publication/POST
excerpt: 'A novel framework for transferring soft prompts between LLMs while preserving privacy through differential privacy and knowledge distillation techniques.'
date: 2025-06-09
venue: 'ICML 2025'
pageurl: '../POST.html'
paperurl: 'https://www.arxiv.org/pdf/2506.16196'
citation: 'Wang, X., et al. (2025). "Efficient and Privacy-Preserving Soft Prompt Transfer for LLMs." International Conference on Machine Learning (ICML).'
---

## Abstract

Large Language Models (LLMs) have demonstrated remarkable capabilities across various tasks through prompt engineering and fine-tuning. However, transferring knowledge between different LLMs while preserving privacy remains a significant challenge. This work introduces **POST (Privacy-preserving Soft prompt Transfer)**, a novel framework that enables efficient transfer of soft prompts between LLMs while maintaining strong privacy guarantees.

## Key Contributions

- **Privacy-Preserving Transfer**: First framework to enable soft prompt transfer with formal differential privacy guarantees
- **Efficiency Optimization**: Significantly reduces computational overhead compared to traditional fine-tuning approaches
- **Cross-Model Compatibility**: Enables knowledge transfer between different LLM architectures and sizes
- **Theoretical Analysis**: Provides privacy and utility guarantees with rigorous theoretical foundations

## Methodology

POST combines differential privacy mechanisms with knowledge distillation techniques to:
1. Extract transferable knowledge from source prompts while adding calibrated noise
2. Compress soft prompt representations into privacy-preserving embeddings
3. Adapt transferred knowledge to target LLMs through efficient fine-tuning

## Results

- **Privacy**: Achieves ε-differential privacy with ε < 1.0 across all experiments
- **Efficiency**: 10x faster than full model fine-tuning with comparable performance
- **Utility**: Maintains 95%+ of original performance on downstream tasks
- **Generalization**: Successfully transfers across different model families (GPT, LLaMA, T5)

## Impact

This work addresses critical challenges in LLM deployment where privacy and efficiency are paramount, opening new possibilities for federated learning and collaborative AI development without compromising sensitive information.

