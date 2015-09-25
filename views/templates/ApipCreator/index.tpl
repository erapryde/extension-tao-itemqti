<?php
use oat\tao\helpers\Template;
?>

<link rel="stylesheet" href="<?= Template::css('apip-creator.css') ?>" />

<div id="apip-creator-scope" data-content-target="wide">
    <div class="wrapper clearfix content sidebar-popup-parent" id="item-editor-wrapper">
        <!-- item panel -->
        <main id="item-editor-panel" class="clearfix">
            <div class="item-editor-action-bar action-bar plain content-action-bar horizontal-action-bar">
                <ul class="plain item-editor-menu action-group">
                    <li id="authoringBack" class="btn-info small">
                        <span class="li-inner">
                            <span class="icon-left"></span>
                            <?= __('Manage Items') ?>
                        </span>
                    </li>
                    <li id="save-trigger" class="btn-info small">
                        <span class="li-inner">
                            <span class="icon-save"></span>
                            <?= __('Save') ?>
                        </span>
                    </li>
                </ul>
                <div id="item-editor-label" class="truncate action-group"></div>
            </div>
            <div id="item-editor-scroll-outer">
                <div id="item-editor-scroll-inner">
                    <!-- item goes here -->
                </div>
            </div>
        </main>
        <!-- /item panel -->
        <!-- right sidebar -->
        <div class="item-editor-sidebar-wrapper right-bar sidebar-popup-parent">
            <div class="action-bar content-action-bar horizontal-action-bar">
            </div>
            <div class="item-editor-sidebar" id="item-editor-item-widget-bar">
                <div class="sidebar-right-section-box apip-ordering">
                    <ul class="plain order-list">
                        <li class="order-element" data-order="1">
                            <span class="information">
                                <span class="order">1</span>
                            </span>
                            <div class="content truncate">
                                Identify the missing word in this famous quote from Shakespeare's Richard III.
                            </div>
                        </li>
                        <li class="order-element" data-order="2">
                            <span class="information">
                                <span class="order">2</span>
                            </span>
                            <div class="content truncate">
                                Now is the winter of our discontent Made glorious summer by this sun of...
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /right sidebar -->
    </div>
</div>

<script>
    requirejs.config({
        config : {
            'taoQtiItem/controller/apip-creator/main' : <?= json_encode(get_data('config')) ?>
        }
    });
</script>
