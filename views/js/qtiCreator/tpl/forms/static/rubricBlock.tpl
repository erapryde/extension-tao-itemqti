<!--currently only visible to the candidate-->
<!--<div class="panel">
    <label for="view">Visible by</label>
    <span class="icon-help tooltipstered" data-tooltip="~ .tooltip-content" data-tooltip-theme="info"></span>
    <div class="tooltip-content">
        A rubric block identifies part of an assessmentItem's itemBody that represents instructions to one or more of the actors that view the item. Although rubric blocks are defined as simpleBlocks they must not contain interactions.
    </div>
    <select name="view" class="select2" data-has-search="false">
        <option value="author">author</option>
        <option value="candidate">candidate</option>
        <option value="proctor">proctor</option>
        <option value="scorer">scorer</option>
        <option value="testConstructor">test constructor</option>
        <option value="tutor">tutor</option>
    </select>
</div>-->

<div class="panel">
    <label for="use">{{__ "Description"}}</label>
    <span class="icon-help tooltipstered" data-tooltip="~ .tooltip-content:first" data-tooltip-theme="info"></span>
    <div class="tooltip-content">The identifier of the choice. This identifier must not be used by any other choice or item variable</div>
    <input type="text" name="use" value="{{use}}" />
</div>