---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---


{% include base_path %}

<div class="row">
    <div class="col-md-12" style="margin-bottom:10px;">
        <p class="p_p publication_title">RatLesNetv2: A Fully ConvNet for Rodent Brain Lesion Segmentation</p>
        <p class="p_p publication_authors"><span class="author"><b>J.M. Valverde</b></span>, <span class="author">A. Shatillo</span>, <span class="author">R. de Feo</span>, <span class="author">A. Sierra</span>, <span class="author">O. Gröhn</span>, <span class="author">J. Tohka</span></p>
        <p class="p_p publication_journal">to appear in Frontiers in Neuroscience.</p>
        <p class="p_p hashtags"><span class="segmentation">#Segmentation</span> <span class="medicalimaging">#MedicalImaging</span></p>
    </div>
    <div class="col-md-4 vcenter">
        <table class="img-paper-table"><tr><td align="center" valign="center" width="100%"><img src="img_ratlesnetv2_20.png" class="img-paper"></td></tr></table>
    </div>
    <div class="col-md-8">
            <p class="p_p publication_abstract">We present a fully convolutional neural network (ConvNet), named RatLesNetv2, for segmenting lesions in rodent magnetic resonance (MR) brain images. RatLesNetv2 architecture resembles an autoencoder and it incorporates residual blocks that facilitate its optimization. RatLesNetv2 is trained end to end on three-dimensional images and it requires no preprocessing. We evaluated RatLesNetv2 on an exceptionally large dataset composed of 916 T2-weighted rat brain MRI scans of 671 rats at nine different lesion stages  that were used to study focal cerebral ischemia for drug development. In addition, we compared its performance with three other ConvNets specifically designed for medical image segmentation. RatLesNetv2 obtained similar to higher Dice coefficient values than the other ConvNets and it produced much more realistic and compact segmentations with notably fewer holes and lower Hausdorff distance. The Dice scores of RatLesNetv2 segmentations also exceeded inter-rater agreement of manual segmentations. In conclusion, RatLesNetv2 could be used for automated lesion segmentation, reducing human workload and improving reproducibility. RatLesNetv2 is publicly available at <a href="https://github.com/jmlipman/RatLesNetv2">https://github.com/jmlipman/RatLesNetv2</a>.</p>
            <p class="p_p publication_extra">[<a class="extra" href="https://arxiv.org/abs/2001.09138">ArXiv</a>], [<a class="extra" href="https://github.com/jmlipman/RatLesNetv2">Code</a>]</p>
        </div>
</div>

<hr>

<div class="row">
    <div class="col-md-12" style="margin-bottom:10px;">
        <p class="p_p publication_title">Rodent Brain MRI Lesion Segmentation with Fully Convolutional Networks</p>
        <p class="p_p publication_authors"><span class="author"><b>J.M. Valverde</b></span>, <span class="author">A. Shatillo</span>, <span class="author">R. de Feo</span>, <span class="author">A. Sierra</span>, <span class="author">O. Gröhn</span>, <span class="author">J. Tohka</span></p>
        <p class="p_p publication_journal">in Machine Learning in Medical Imaging, MICCAI 2019.</p>
        <p class="p_p hashtags"><span class="segmentation">#Segmentation</span> <span class="medicalimaging">#MedicalImaging</span></p>
    </div>
    <div class="col-md-4 vcenter">
        <table class="img-paper-table"><tr><td align="center" valign="center" width="100%"><img src="img_ratlesnet_19.png" class="img-paper"></td></tr></table>
    </div>
    <div class="col-md-8">
            <p class="p_p publication_abstract">Manual segmentation of rodent brain lesions from magnetic resonance images (MRIs) is an arduous, time-consuming and subjective task 
            that is highly important in pre-clinical research. Several automatic methods have been developed for different human brain MRI segmentation, but little research has 
            targeted automatic rodent lesion segmentation. The existing tools for performing automatic lesion segmentation in rodents are constrained by strict assumptions about 
            the data. Deep learning has been successfully used for medical image segmentation. However, there has not been any deep learning approach specifically designed for 
            tackling rodent brain lesion segmentation. In this work, we propose a novel Fully Convolutional Network (FCN), RatLesNet, for the aforementioned task.</p>
            <p class="p_p publication_extra">[<a class="extra" href="https://arxiv.org/abs/1908.08746">ArXiv</a>], [<a class="extra" href="{{ base_path }}/publications/poster_ratlesnet_19.pdf">Poster</a>]</p>
        </div>
</div>

<hr>

<div class="row">
<div class="col-md-12" style="margin-bottom:10px;">
    <p class="p_p publication_title">Predicting intelligence based on cortical WM/GM contrast, cortical thickness and volumetry</p>
        <p class="p_p publication_authors"><span class="author"><b>J.M. Valverde</b></span>*, <span class="author">V. Imani</span>*, <span class="author">J.D. Lewis</span>, <span class="author">J. Tohka</span></p>
        <p class="p_p publication_journal">in Adolescent Brain Cognitive Development Neurocognitive Prediction, MICCAI 2019.</p>
    <p class="p_p hashtags"><span class="segmentation">#Regression</span> <span class="medicalimaging">#MedicalImaging</span></p>
</div>
<div class="col-md-4 vcenter">
    <table class="img-paper-table"><tr><td align="center" valign="center" width="100%"><img src="img_abcd_19.png" class="img-paper"></td></tr></table>
    </div>
    <div class="col-md-8">
        <p class="p_p publication_abstract">We propose a four-layer fully-connected neural network (FNN) for predicting fluid intelligence scores from T1-weighted MR images 
        for the ABCD-challenge. In addition to the volumes of brain structures, the FNN uses cortical WM/GM contrast and cortical thickness at 78 cortical regions. These last 
        two measurements were derived from the T1-weighted MR images using cortical surfaces produced by the CIVET pipeline. The age and gender of the subjects and the scanner 
        manufacturer are also used as features for the learning algorithm. This yielded 283 features provided to the FNN with two hidden layers of 20 and 15 nodes.</p>
        <p class="p_p publication_extra">[<a class="extra" href="https://arxiv.org/abs/1909.05660">ArXiv</a>], [<a class="extra" href="{{ base_path }}/publications/poster_abcd_19.pdf">Poster</a>]</p>
    </div>
</div>

# Publications (list)
## Journal papers
 1. **J.M. Valverde**, A. Shatillo, R. de Feo, O. Gröhn, A. Sierra, J. Tohka. Automatic Rodent Brain MRI Lesion Segmentation with Fully Convolutional Networks. To appear in Frontiers in Neuroscience. [(ArXiv)](https://arxiv.org/abs/1908.08746)

## Refereed conference papers
 1. **J.M. Valverde**, A. Shatillo, R. de Feo, O. Gröhn, A. Sierra, J. Tohka. Automatic Rodent Brain MRI Lesion Segmentation with Fully Convolutional Networks. Machine Learning in Medical Imaging, 2019. [(publication)](https://link.springer.com/chapter/10.1007%2F978-3-030-32692-0_23) [(ArXiv)](https://arxiv.org/abs/1908.08746)
 1. **J.M. Valverde**, V. Imani, J.D. Lewis, J. Tohka. Predicting intelligence based on cortical WM/GM contrast, cortical thickness and volumetry. Adolescent Brain Cognitive Development Neurocognitive Prediction, 2019. [(publication)](https://link.springer.com/chapter/10.1007%2F978-3-030-31901-4_7) [(ArXiv)](https://arxiv.org/abs/1909.05660)




