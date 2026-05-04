<div class="tw-relative tw-py-12 md:tw-py-16 tw-pb-20 tw-overflow-hidden">
    <!-- Image de fond avec flou -->
    <div class="tw-absolute tw-inset-0 tw-z-0">
        <img 
            src="<?php echo esc_url('https://safen.womenintech.bj/wp-content/uploads/2026/01/Y9A3234-scaled.jpg'); ?>" 
            class="tw-w-full tw-h-full tw-object-cover"
            alt="background"
        />
        <!-- Overlay noir -->
        <div class="tw-absolute tw-inset-0" style="background-color: rgba(40, 35, 187, 0.80);"></div>
    </div>

    <div class="container tw-relative tw-z-10">
        <!-- Titre de section centré avec trait rose -->
        <div class="tw-mb-8 md:tw-mb-12 tw-text-center tw-relative">
            <h2 class="tw-text-2xl tw-font-bold md:tw-text-4xl lg:tw-text-5xl tw-text-white tw-mb-3 md:tw-mb-4">
                Au cœur de l'expérience 2026
            </h2>
            <div class="tw-w-20 md:tw-w-24 tw-h-1 tw-mx-auto" style="background-color: #ff2d8a;"></div>
        </div>

        <!-- Timeline des activités avec max-width -->
        <div class="tw-relative tw-max-w-3xl tw-mx-auto">
            <!-- Ligne verticale centrale (desktop uniquement) -->
            <div class="tw-hidden lg:tw-block tw-absolute tw-left-1/2 tw-top-0 tw-bottom-0 tw-w-0.5 tw-bg-white/30" style="transform: translateX(-50%);"></div>

            <!-- MOBILE: Grille 2 colonnes -->
            <div class="tw-grid tw-grid-cols-2 tw-gap-4 lg:tw-hidden">
                
                <?php
                $activities = array(
                    array(
                        'title' => ' Keynote & panels',
                        'description' => 'Échanges inspirants avec des leaders africains et internationaux sur l\'IA, le digital et l\'innovation féminine.',
                        'icon' => 'presentation',
                        'image' => 'https://safen.womenintech.bj/wp-content/uploads/2026/01/Y9A3514-scaled-e1770028330632.jpg'
                    ),
                    array(
                        'title' => 'Masterclass Pratiques',
                        'description' => 'Ateliers hands-on pour développer vos compétences en technologie, IA et innovation digitale.',
                        'icon' => 'graduation-cap',
                        'image' => 'https://safen.womenintech.bj/wp-content/uploads/2026/01/Y9A3133-scaled-e1770028611963.jpg'
                    ),
                    array(
                        'title' => 'Concours Créatif',
                        'description' => 'Compétitions stimulantes pour révéler les talents créatifs et innovants avec des prix attractifs.',
                        'icon' => 'trophy',
                        'image' => 'https://safen.womenintech.bj/wp-content/uploads/2026/01/Y9A3313-scaled-e1770027999405.jpg'
                    ),
                    array(
                        'title' => 'Galerie Art Digital',
                        'description' => 'Exposition d\'œuvres numériques créées par des artistes africaines émergentes utilisant l\'IA.',
                        'icon' => 'palette',
                        'image' => 'https://safen.womenintech.bj/wp-content/uploads/2026/02/Galeries-Art-dIGITAL-.jpg-1.jpeg'
                    ),
                    array(
                        'title' => 'Démo Day SheGrowth',
                        'description' => 'Pitch de startups féminines innovantes avec opportunités de financement et mentorat.',
                        'icon' => 'rocket',
                        'image' => 'https://safen.womenintech.bj/wp-content/uploads/2026/01/967B8724-scaled-e1770028169625.jpg'
                    ),
                    array(
                        'title' => 'Visites de stands',
                        'description' => 'Découvrez les exposants, partenaires et solutions tech innovantes pour transformer l\'Afrique.',
                        'icon' => 'store',
                        'image' => 'https://safen.womenintech.bj/wp-content/uploads/2026/02/Visite-de-Stands-.jpg.jpeg'
                    )
                );

                // Affichage MOBILE uniquement
                foreach ($activities as $index => $activity) {
                    ?>
                    <div class="tw-flex tw-flex-col tw-items-center">
                        <!-- Image avec bordure rose -->
                        <div class="tw-relative tw-w-full tw-overflow-hidden tw-rounded-lg" style="padding-bottom: 100%; border: 2px solid #ff2d8a;">
                            <img 
                                src="<?php echo esc_url($activity['image']); ?>" 
                                class="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
                                alt="<?php echo esc_attr($activity['title']); ?>"
                                style="filter: brightness(0.85) contrast(1.1);"
                            />
                            <!-- Icône sur l'image -->
                            <div class="tw-absolute tw-top-2 tw-right-2 tw-w-8 tw-h-8 tw-rounded-full tw-flex tw-items-center tw-justify-center" style="background-color: #ff2d8a;">
                                <i data-lucide="<?php echo esc_attr($activity['icon']); ?>" style="color: white; width: 16px; height: 16px;"></i>
                            </div>
                        </div>
                        <!-- Titre -->
                        <h3 class="tw-mt-3 tw-text-xs tw-font-bold tw-text-white tw-text-center tw-leading-tight">
                            <?php echo esc_html($activity['title']); ?>
                        </h3>
                    </div>
                <?php } ?>
                
            </div>

            <!-- DESKTOP: Timeline originale -->
            <div class="tw-hidden lg:tw-block tw-space-y-10">
                
                <?php
                foreach ($activities as $index => $activity) {
                    $isLeft = $index % 2 === 0;
                    ?>
                    
                    <div class="tw-relative tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-8">
                        
                        <?php if ($isLeft) { ?>
                            <!-- Image à gauche avec cadre rose décalé -->
                            <div class="tw-w-full lg:tw-w-1/2 lg:tw-pr-8">
                                <div class="tw-relative tw-group">
                                    <!-- Cadre rose décalé -->
                                    <div class="tw-absolute tw-inset-0 tw-rounded-xl tw-transition-all tw-duration-500 group-hover:tw-translate-x-3 group-hover:tw-translate-y-3" 
                                         style="background-color: #ff2d8a; transform: translate(8px, 8px); z-index: 0;">
                                    </div>
                                    
                                    <!-- Image principale -->
                                    <div class="tw-relative tw-overflow-hidden tw-rounded-xl tw-cursor-pointer tw-border-2 tw-border-white/20 tw-transition-all tw-duration-500 group-hover:tw--translate-x-1 group-hover:tw--translate-y-1" 
                                         style="height: 130px; box-shadow: 0 4px 15px rgba(255, 45, 138, 0.3); z-index: 1;">
                                        <img 
                                            src="<?php echo esc_url($activity['image']); ?>" 
                                            class="tw-w-full tw-h-full tw-object-cover tw-transition tw-duration-500 group-hover:tw-scale-110 group-hover:tw-brightness-110"
                                            style="filter: brightness(0.85) contrast(1.1);"
                                            alt="<?php echo esc_attr($activity['title']); ?>"
                                        />
                                        <div class="tw-absolute tw-inset-0 tw-bg-black/85 tw-opacity-0 group-hover:tw-opacity-100 tw-transition tw-duration-500 tw-flex tw-items-center tw-justify-center tw-p-4">
                                            <p class="tw-text-white tw-text-xs tw-leading-relaxed tw-transform tw-translate-y-2 group-hover:tw-translate-y-0 tw-transition tw-duration-500">
                                                <?php echo esc_html($activity['description']); ?>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Icône au centre -->
                            <div class="tw-hidden lg:tw-flex tw-absolute tw-left-1/2 tw-w-14 tw-h-14 tw-rounded-full tw-items-center tw-justify-center tw-z-10" style="background-color: #ff2d8a; box-shadow: 0 4px 12px rgba(255, 45, 138, 0.5); transform: translateX(-50%);">
                                <i data-lucide="<?php echo esc_attr($activity['icon']); ?>" style="color: white; width: 24px; height: 24px;"></i>
                            </div>
                            
                            <!-- Titre à droite -->
                            <div class="tw-w-full lg:tw-w-1/2 lg:tw-pl-8 tw-flex tw-items-center">
                                <h3 class="tw-text-xl tw-font-bold tw-text-white">
                                    <?php echo esc_html($activity['title']); ?>
                                </h3>
                            </div>
                            
                        <?php } else { ?>
                            <!-- Titre à gauche -->
                            <div class="tw-w-full lg:tw-w-1/2 lg:tw-pr-8 tw-flex tw-items-center lg:tw-justify-end">
                                <h3 class="tw-text-xl tw-font-bold lg:tw-text-right tw-text-white">
                                    <?php echo esc_html($activity['title']); ?>
                                </h3>
                            </div>
                            
                            <!-- Icône au centre -->
                            <div class="tw-hidden lg:tw-flex tw-absolute tw-left-1/2 tw-w-14 tw-h-14 tw-rounded-full tw-items-center tw-justify-center tw-z-10" style="background-color: #ff2d8a; box-shadow: 0 4px 12px rgba(255, 45, 138, 0.5); transform: translateX(-50%);">
                                <i data-lucide="<?php echo esc_attr($activity['icon']); ?>" style="color: white; width: 24px; height: 24px;"></i>
                            </div>
                            
                            <!-- Image à droite avec cadre rose décalé -->
                            <div class="tw-w-full lg:tw-w-1/2 lg:tw-pl-8">
                                <div class="tw-relative tw-group">
                                    <!-- Cadre rose décalé -->
                                    <div class="tw-absolute tw-inset-0 tw-rounded-xl tw-transition-all tw-duration-500 group-hover:tw-translate-x-3 group-hover:tw-translate-y-3" 
                                         style="background-color: #ff2d8a; transform: translate(8px, 8px); z-index: 0;">
                                    </div>
                                    
                                    <!-- Image principale -->
                                    <div class="tw-relative tw-overflow-hidden tw-rounded-xl tw-cursor-pointer tw-border-2 tw-border-white/20 tw-transition-all tw-duration-500 group-hover:tw--translate-x-1 group-hover:tw--translate-y-1" 
                                         style="height: 130px; box-shadow: 0 4px 15px rgba(255, 45, 138, 0.3); z-index: 1;">
                                        <img 
                                            src="<?php echo esc_url($activity['image']); ?>" 
                                            class="tw-w-full tw-h-full tw-object-cover tw-transition tw-duration-500 group-hover:tw-scale-110 group-hover:tw-brightness-110"
                                            style="filter: brightness(0.85) contrast(1.1);"
                                            alt="<?php echo esc_attr($activity['title']); ?>"
                                        />
                                        <div class="tw-absolute tw-inset-0 tw-bg-black/85 tw-opacity-0 group-hover:tw-opacity-100 tw-transition tw-duration-500 tw-flex tw-items-center tw-justify-center tw-p-4">
                                            <p class="tw-text-white tw-text-xs tw-leading-relaxed tw-transform tw-translate-y-2 group-hover:tw-translate-y-0 tw-transition tw-duration-500">
                                                <?php echo esc_html($activity['description']); ?>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php } ?>
                        
                    </div>
                    
                <?php } ?>

            </div>
        </div>
    </div>
</div>

<script src="https://unpkg.com/lucide@latest"></script>
<script>
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
</script>
